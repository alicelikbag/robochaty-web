import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

// Placeholder configuration - in production this would be env vars
const firebaseConfig = {
  apiKey: "PLACEHOLDER_API_KEY",
  authDomain: "placeholder-app.firebaseapp.com",
  projectId: "placeholder-app",
  storageBucket: "placeholder-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase (safely)
let db: any;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (e) {
  console.log("Firebase placeholder initialization");
}

export default function Whitelist() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      // Simulation of Firebase call if config is placeholder
      if (firebaseConfig.apiKey === "PLACEHOLDER_API_KEY") {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
        // In a real app, this would be:
        // await addDoc(collection(db, "whitelist_emails"), { email, timestamp: serverTimestamp() });
        
        console.log("Mock saved to whitelist_emails:", email);
      } else {
        await addDoc(collection(db, "whitelist_emails"), {
          email,
          timestamp: serverTimestamp()
        });
      }

      setStatus("success");
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been added to the whitelist.",
      });
    } catch (error) {
      console.error("Error adding to whitelist:", error);
      setStatus("error");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-lg relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[80px] rounded-full -z-10" />
          
          <Card className="glass-card border-white/10 shadow-2xl backdrop-blur-xl">
            <CardHeader className="text-center space-y-4 pt-10">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 mb-4 transform rotate-3">
                 <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold">Join the Whitelist</CardTitle>
              <CardDescription className="text-lg">
                Get early access to RoboChaty's AI trading tools and exclusive benefits.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {status === "success" ? (
                <div className="text-center py-8 animate-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You're in!</h3>
                  <p className="text-muted-foreground">
                    Thank you for joining. We'll be in touch soon with your access details.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8 border-white/10 hover:bg-white/5"
                    onClick={() => setStatus("idle")}
                  >
                    Register another email
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-black/40 border-white/10 h-12 text-lg focus-visible:ring-primary focus-visible:border-primary/50 transition-all"
                      disabled={loading}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      "Secure My Spot"
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground/60">
                    Limited spots available. No spam, ever.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
