
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleGoogleAuth = () => {
    // In a real implementation, this would be replaced with actual Google Auth SDK
    toast({
      title: "Google Authentication",
      description: "Google authentication is not yet implemented. This will be connected to a real auth provider.",
      duration: 5000,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would handle authentication
    toast({
      title: isSignIn ? "Sign In Attempt" : "Account Creation Attempt",
      description: `Email: ${email} (This is just a placeholder - no actual authentication is happening)`,
      duration: 5000,
    });
  };

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
          >
            <LogIn className="h-5 w-5" />
            Continue with Google
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
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
              />
            </div>
            <Button type="submit" className="w-full h-12 bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90">
              {isSignIn ? "Sign In" : "Create Account"}
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
