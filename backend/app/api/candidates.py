from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.llm_service import LLMService

router = APIRouter()

@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")
    
    # In the upgrade, we will add PDF text extraction here
    return {
        "filename": file.filename,
        "status": "Successfully Uploaded",
        "candidate_id": "12345"
    }

@router.get("/{candidate_id}")
async def get_candidate_details(candidate_id: str):
    return {"id": candidate_id, "name": "Sarah Chen", "score": 98}
  
