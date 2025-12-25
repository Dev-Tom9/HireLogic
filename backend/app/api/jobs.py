from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

# Simple schema for creating a job
class JobCreate(BaseModel):
    title: str
    description: str

# In-memory storage for now (we'll upgrade to Database later)
jobs_db = []

@router.post("/")
async def create_job(job: JobCreate):
    new_job = {"id": len(jobs_db) + 1, **job.dict()}
    jobs_db.append(new_job)
    return new_job

@router.get("/")
async def get_jobs():
    return jobs_db