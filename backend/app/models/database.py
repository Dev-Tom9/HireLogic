from sqlalchemy import Column, Integer, String, JSON, Float, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Job(Base):
    __tablename__ = "jobs"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)

class Candidate(Base):
    __tablename__ = "candidates"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    resume_json = Column(JSON)  # Stores the AI-parsed data
    match_score = Column(Float)
    analysis_json = Column(JSON) # Stores strengths, gaps, and questions