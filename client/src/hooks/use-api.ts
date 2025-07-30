import { useState, useEffect } from 'react';

export function useApi(endpoint: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(endpoint)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(responseData => {
        // If the response has a 'results' property (paginated response from Django REST Framework),
        // return the entire response object so components can access pagination info if needed
        setData(responseData);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
} 