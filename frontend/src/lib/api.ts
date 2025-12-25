import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
});

export const hireLogicAPI = {
  // Job related
  getJobs: () => api.get('/jobs'),
  createJob: (data: any) => api.post('/jobs', data),
  
  // Candidate related
  uploadResume: (jobId: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post(`/jobs/${jobId}/resumes`, formData);
  },
  getCandidates: (jobId: string) => api.get(`/jobs/${jobId}/candidates`),
  
  // AI Insight
  getInterviewQuestions: (candidateId: string) => api.get(`/candidates/${candidateId}/interview-questions`),
};
