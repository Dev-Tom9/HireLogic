import axios from 'axios';

// The baseURL should point to your live Render link via the env variable
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const hireLogicAPI = {
  // --- Job Related ---
  getJobs: () => api.get('/api/jobs/'),
  
  createJob: (data: any) => api.post('/api/jobs/', data),
  
  // --- Candidate Related ---
  // Added this to satisfy the useCandidates hook
  getCandidates: (jobId: string) => api.get(`/api/jobs/${jobId}/candidates`),

  uploadResume: (file: File) => {
    const formData = new FormData();
    // Use 'resume' as the key to match backend: resume: UploadFile
    formData.append('resume', file);
    return api.post('/api/candidates/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  getCandidateDetails: (candidateId: string) => 
    api.get(`/api/candidates/${candidateId}`),
  
  // --- AI Analysis ---
  analyzeResume: (jobDescription: string, resumeFile: File) => {
    const formData = new FormData();
    formData.append('job_description', jobDescription);
    formData.append('resume', resumeFile);
    
    return api.post('/analyze', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
};