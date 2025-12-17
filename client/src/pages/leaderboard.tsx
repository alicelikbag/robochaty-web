import { Layout } from "@/components/layout";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-background perspective-1000">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 animate-in fade-in zoom-in duration-1000 delay-100">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(124,92,255,0.3)] animate-float">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent">
              LEADERBOARD
            </span>
          </h1>
          
          <div className="inline-flex items-center px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary mr-3 animate-pulse" />
            <span className="text-xl font-mono tracking-widest text-primary">COMING SOON</span>
          </div>

          <p className="mt-8 text-muted-foreground max-w-md mx-auto text-lg">
            Track top performers, compete in trading battles, and earn reputation points in the RoboChaty ecosystem.
          </p>
        </div>
      </div>
    </Layout>
  );
}
