from fastapi import APIRouter, UploadFile, File, Form
from app.utils.pdf_processor import extract_text_from_pdf
from app.services.llm_service import LLMService
from app.services.ranking import RankingEngine

router = APIRouter()

@router.post("/screen")
async def screen_candidate(
    file: UploadFile = File(...), 
    job_description: str = Form(...)
):
    # 1. Read the PDF bytes
    pdf_content = await file.read()
    
    # 2. Extract raw text
    raw_text = extract_text_from_pdf(pdf_content)
    
    # 3. Parse into structured JSON
    candidate_data = await LLMService.parse_resume_to_json(raw_text)
    
    # 4. Rank against the JD
    ranking_result = await RankingEngine.generate_match_score(candidate_data, job_description)
    
    # 5. Return the "Senior" grade combined result
    return {
        "candidate_info": candidate_data,
        "analysis": ranking_result
    }