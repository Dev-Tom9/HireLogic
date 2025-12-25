import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "HireLogic"
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./test.db")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")

settings = Settings()
