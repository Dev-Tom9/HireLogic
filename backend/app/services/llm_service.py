import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class LLMService:
    @staticmethod
    async def parse_resume(text: str):
        prompt = f"""
        You are an expert HR Data Parser. 
        Extract the following from the resume text into a clean JSON format:
        - Full Name
        - Skills (Categorized)
        - Years of Experience
        - Education
        - A 2-sentence professional summary
        
        Resume Text: {text[:4000]}
        """
        # We will add the actual OpenAI call logic in the upgrade phase
        return {"message": "AI Parser Ready"}

    @staticmethod
    async def rank_candidate(resume_data: dict, jd_text: str):
        # Professional ranking logic goes here
        pass
      
