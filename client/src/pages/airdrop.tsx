import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Gift } from "lucide-react";

export default function Airdrop() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="relative z-10 text-center px-4 animate-in fade-in zoom-in duration-1000">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,229,255,0.3)] animate-float">
            <Gift className="w-10 h-10 text-secondary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-secondary via-white to-primary bg-clip-text text-transparent">
              AIRDROP
            </span>
          </h1>
          
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary mr-3 animate-pulse" />
            <span className="text-xl font-mono tracking-widest text-secondary">COMING SOON</span>
          </div>

          <p className="mt-8 text-muted-foreground max-w-md mx-auto text-lg">
            Early supporters and active community members will be rewarded. Stay tuned for eligibility criteria.
          </p>
        </div>
      </div>
    </Layout>
  );
}
