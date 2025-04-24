
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSignIn, useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { signIn, isLoaded: isSignInLoaded } = useSignIn();
  const { signUp, isLoaded: isSignUpLoaded } = useSignUp();

  const handleGoogleAuth = async () => {
    try {
      setIsLoading(true);
      
      if (isSignIn) {
        // For sign in with Google
        if (!signIn) {
          toast({
            title: "Error",
            description: "Sign in service is not available",
            duration: 5000,
          });
          setIsLoading(false);
          return;
        }
        
        await signIn.authenticateWithRedirect({
          strategy: "oauth_google",
          redirectUrl: `${window.location.origin}`,
          redirectUrlComplete: `${window.location.origin}`
        });
      } else {
        // For sign up with Google
        if (!signUp) {
          toast({
            title: "Error",
            description: "Sign up service is not available",
            duration: 5000,
          });
          setIsLoading(false);
          return;
        }
        
        await signUp.authenticateWithRedirect({
          strategy: "oauth_google",
          redirectUrl: `${window.location.origin}`,
          redirectUrlComplete: `${window.location.origin}`
        });
      }
    } catch (error) {
      console.error("Google auth error:", error);
      toast({
        title: "Authentication Error",
        description: "Failed to authenticate with Google. Please try again.",
        duration: 5000,
      });
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (isSignIn) {
        await signIn?.create({
          identifier: email,
          password,
        });
      } else {
        await signUp?.create({
          emailAddress: email,
          password,
        });
      }
      navigate("/");
    } catch (error) {
      toast({
        title: "Authentication Error",
        description: "Failed to authenticate. Please check your credentials and try again.",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isSignInLoaded || !isSignUpLoaded) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            {isSignIn ? "Welcome Back" : "Get Started"}
          </h2>
          <p className="mt-2 text-gray-600">
            {isSignIn
              ? "Sign in to continue to Leadflowr"
              : "Create your Leadflowr account"}
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <Button
            variant="outline"
            className="w-full justify-center gap-2 h-12"
            onClick={handleGoogleAuth}
            disabled={isLoading}
          >
            <LogIn className="h-5 w-5" />
            {isLoading ? "Loading..." : "Continue with Google"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                disabled={isLoading}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : (isSignIn ? "Sign In" : "Create Account")}
              <ArrowRight className="ml-2" />
            </Button>
          </form>

          <div className="text-center text-sm">
            <span className="text-gray-600">
              {isSignIn ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-brand-purple hover:underline font-medium"
            >
              {isSignIn ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
