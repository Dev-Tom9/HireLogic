export interface Candidate {
  id: string;
  name: string;
  email: string;
  matchScore: number;
  experienceYears: number;
  skills: string[];
  status: 'Pending' | 'Shortlisted' | 'Rejected';
  summary: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  status: 'Open' | 'Closed';
  applicantsCount: number;
  postedDate: string;
}
