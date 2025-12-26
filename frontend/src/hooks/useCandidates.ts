import { useState, useEffect } from 'react';
import { hireLogicAPI } from '../lib/api';

export const useCandidates = (jobId: string) => {
  const [candidates, setCandidates] = useState<any[]>([]); // Added typing here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        // This now calls the method we added to api.ts above
        const res = await hireLogicAPI.getCandidates(jobId);
        setCandidates(res.data);
      } catch (err) {
        console.error("Failed to load candidates", err);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchCandidates();
    }
  }, [jobId]);

  return { candidates, loading };
};