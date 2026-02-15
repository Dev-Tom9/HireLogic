### 🚀 HireLogic: AI-Powered Talent Intelligence

HireLogic is a high-performance recruitment platform that uses Artificial Intelligence to bridge the gap between job requirements and candidate potential. It automates the heavy lifting of resume screening, providing recruiters with deep insights beyond simple keyword matching.

## 🌟 What We Have Built So Far

### 1. Neural Analysis Engine

A sophisticated backend built with **FastAPI** that uses **OpenAI’s GPT-4o-mini** to perform semantic analysis on resumes. It doesn't just look for words; it understands context, experience level, and skill depth.

### 2. Multi-Module Backend Architecture

We have structured the backend into clean, professional modules:

* **Jobs Module:** For creating and managing job descriptions.
* **Candidates Module:** For handling resume uploads and parsing.
* **Analysis Module:** The "Brain" that connects the two.

### 3. Type-Safe Frontend

A modern **Next.js 15** dashboard built with **TypeScript**. We implemented a custom Axios API client and React Hooks to ensure the data flows perfectly from the server to the user interface.

### 4. Cloud Infrastructure

Successfully deployed on **Render** with environment variables configured for security, ensuring that sensitive API keys are never exposed.

---

## 🛠️ Technical Stack

* **Frontend:** Next.js 15, TypeScript, Tailwind CSS, Lucide Icons.
* **Backend:** Python 3.10+, FastAPI, Pydantic, OpenAI SDK.
* **Database/Storage:** Multipart form-data for resume processing.
* **Deployment:** Render (Backend) / Vercel (Frontend).

---

## 🚀 The Future Roadmap (What's Left to Work On)

### Phase 1: Deep Intelligence (Next Steps)

* **AI Interview Architect:** Generate 5 custom technical questions based on the "gaps" found in a candidate's resume.
* **Skills Heatmap:** A visual color-coded grid (Green/Yellow/Red) showing exactly which requirements are met and which are missing.

### Phase 2: Recruiter Workflow

* **Bulk Resume Upload:** The ability to drag and drop 50 resumes at once and have the AI rank them in a leaderboard.
* **PDF Report Export:** Generate a professional one-page summary of the AI's findings to send to hiring managers.

### Phase 3: Advanced Features

* **Candidate Matching Notifications:** Email alerts when a resume with a 90%+ score is uploaded.
* **Voice-to-Feedback:** Allowing recruiters to record voice notes that the AI incorporates into the candidate's profile.

## 🚦 Installation & Setup

### Backend

1. cd backend
2. pip install -r requirements.txt
3. Create a .env file with your OPENAI_API_KEY.
4. Run: uvicorn app.main:app --reload

### Frontend

1. cd frontend
2. npm install --legacy-peer-deps
3. Run: npm run dev

*Developed by Dev-Tom9 — Transforming recruitment with Artificial Intelligence.*
