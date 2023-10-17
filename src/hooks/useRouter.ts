import { useMemo } from 'react';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

export function useRouter<
  S extends object | null = any,
  P extends object | null = any,
  Q extends object | null = any,
>() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: navigate,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: Object.fromEntries(searchParams.entries()) as Q,
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      location,
      navigate,
      state: location.state as S | undefined,
      params: params as P,
    };
  }, [params, location, navigate, searchParams]);
}
