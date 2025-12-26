import os
from openai import OpenAI
from dotenv import load_dotenv

# This loads the variables from your local .env file
load_dotenv()

# Use the NAME of the environment variable, not the actual key here!
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
        # Logic to call OpenAI will go here
        return {"message": "AI Parser Ready"}

    @staticmethod
    async def rank_candidate(resume_data: dict, jd_text: str):
        # Professional ranking logic goes here
        pass