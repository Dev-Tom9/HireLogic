from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
# Ensure these imports exist in your project structure
from app.api import jobs, candidates, analysis

app = FastAPI(title="HireLogic AI Engine", version="1.0.0")

# Setup CORS for the Next.js Frontend (Port 3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- UPDATED: Neural Analysis Endpoint with PDF Validation ---
@app.post("/analyze")
async def analyze_resume(
    job_description: str = Form(...), 
    resume: UploadFile = File(...)
):
    """
    Receives Job Description and Resume PDF.
    Strictly validates for PDF format before processing.
    """
    # Security Check: Only allow PDFs
    if not resume.filename.lower().endswith('.pdf'):
        raise HTTPException(
            status_code=400, 
            detail="UPLINK_REJECTED: Only PDF files are supported by the Neural Engine."
        )

    print(f"📡 UPLINK DETECTED: Analyzing {resume.filename}")
    print(f"📄 JD LENGTH: {len(job_description)} characters")

    # Simulation of AI Analysis Logic
    return {
        "score": 92,
        "feedback": f"Neural Link Confirmed. {resume.filename} has been decrypted and analyzed. High alignment detected with core requirements."
    }

# Include Existing Routers
app.include_router(jobs.router, prefix="/api/jobs", tags=["Jobs"])
app.include_router(candidates.router, prefix="/api/candidates", tags=["Candidates"])
app.include_router(analysis.router, prefix="/api/analysis", tags=["AI Analysis"])

@app.get("/")
async def root():
    return {"status": "HireLogic API is Online", "version": "1.0.0"}