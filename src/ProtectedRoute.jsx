import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

//   console.log(isSignedIn, isLoaded, user);

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  // Checking OnBoarding Page auth
  if ( user !== undefined && !user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    toast.warning("On Borading Important")
    return <Navigate to="/onboarding" />;
  }
  return children;
};

export default ProtectedRoute;