import { useEffect, useState } from "react";

// Custom hook for handling media queries
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false); // State variable to store the current match result

  useEffect(() => {
    const mediaQuery = window.matchMedia(query); // Create a media query object based on the provided query

    const updateMatches = (e) => {
      setMatches(e.matches); // Update the matches state based on the new match result
    };

    mediaQuery.addListener(updateMatches); // Add a listener to the media query object to track changes

    // Initial check
    setMatches(mediaQuery.matches); // Perform an initial check to set the matches state correctly

    // Clean up the listener on component unmount
    return () => {
      mediaQuery.removeListener(updateMatches); // Remove the listener when the component is unmounted
    };
  }, [query]); // Re-run the effect whenever the query parameter changes

  return matches; // Return the current match result from the hook
};

export default useMediaQuery;
