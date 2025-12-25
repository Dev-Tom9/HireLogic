import json
from app.services.llm_service import LLMService

class RankingEngine:
    @staticmethod
    async def generate_match_score(resume_json: dict, jd_text: str):
        """
        This service compares the structured resume data against the 
        Job Description using the LLM.
        """
        
        prompt = f"""
        You are an expert technical recruiter. 
        Compare the following Candidate Data against the Job Description.
        
        Candidate Data:
        {json.dumps(resume_json)}
        
        Job Description:
        {jd_text}
        
        Evaluate the match and return a JSON object:
        {{
            "match_score": (integer between 0-100),
            "strengths": ["point 1", "point 2", "point 3"],
            "concerns": ["point 1", "point 2"],
            "verdict": "Shortlist" | "Review" | "Reject"
        }}
        """
        
        # We will use the existing LLM service to send this prompt
        # and return the structured scoring.
        analysis = await LLMService.client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[{"role": "user", "content": prompt}],
            response_format={ "type": "json_object" }
        )
        
        return json.loads(analysis.choices[0].message.content)