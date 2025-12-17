import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, ShieldCheck, Rocket } from "lucide-react";

export default function SnipeBot() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20 px-4 py-1 rounded-full text-sm">
            <Rocket className="w-3 h-3 mr-2" /> Live Detection
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">AI Snipe Mode</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capture new launches instantly with AI-powered precision and safety checks.
          </p>
        </div>

        {/* Existing Section Placeholder (simulated) */}
        <section className="mb-20">
           <div className="flex flex-col items-center justify-center p-12 border border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm">
             <h2 className="text-2xl font-bold mb-2">Standard Sniping</h2>
             <p className="text-muted-foreground mb-6">Traditional sniping tools available soon.</p>
             <Badge variant="outline" className="border-primary/50 text-primary">COMING SOON</Badge>
           </div>
        </section>

        {/* New AI Snipe Mode Section */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
               <div className="inline-flex items-center space-x-2 text-secondary font-medium tracking-wider text-sm uppercase">
                 <Zap className="w-4 h-4" />
                 <span>Lightning Fast Execution</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                 Don't Miss the <span className="text-primary">Next 100x</span>
               </h2>
               
               <div className="space-y-4 text-muted-foreground leading-relaxed">
                 <p>
                   The biggest gains in crypto markets often happen at the exact moment a new project launches or during unexpected pumps. However, catching these opportunities manually is nearly impossible due to speed, competition, and risk.
                 </p>
                 <p>
                   AI Snipe Mode continuously scans Solana, Base, and other supported blockchains in real time. It detects new token launches, monitors liquidity additions, verifies smart contracts, and applies predefined safety filters such as market cap limits, holder count, and advanced rug-check mechanisms.
                 </p>
               </div>

               <Card className="bg-black/40 border-primary/20 mt-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
                 <CardContent className="p-6">
                   <p className="text-sm text-muted-foreground mb-2 font-mono">Example command:</p>
                   <p className="text-lg font-medium text-white font-mono">
                     "Enable snipe mode on Solana, snipe new tokens with a maximum of $100, keep rug-check enabled."
                   </p>
                 </CardContent>
               </Card>

               <div className="pt-4">
                 <h3 className="font-semibold text-white mb-2">Key Benefits:</h3>
                 <ul className="space-y-2">
                   <li className="flex items-center text-muted-foreground">
                     <ShieldCheck className="w-5 h-5 text-green-400 mr-3" />
                     Advanced Rug-Check Protection
                   </li>
                   <li className="flex items-center text-muted-foreground">
                     <Rocket className="w-5 h-5 text-purple-400 mr-3" />
                     Auto-Execute on Opportunity Detection
                   </li>
                   <li className="flex items-center text-muted-foreground">
                     <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                     Configurable Take-Profit & Stop-Loss
                   </li>
                 </ul>
               </div>
             </div>

             {/* Visual/Image Placeholder */}
             <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 animate-pulse" />
               <Card className="glass-card border-white/10 h-[500px] flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                 <div className="relative z-10 text-center p-8">
                   <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-primary/30 shadow-[0_0_30px_rgba(124,92,255,0.3)]">
                     <Rocket className="w-10 h-10 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">AI Snipe Dashboard</h3>
                   <p className="text-muted-foreground text-sm">
                     [Placeholder for UI Screenshot / Diagram showing real-time scanning feed and executed trades]
                   </p>
                 </div>
               </Card>
             </div>
           </div>
        </section>
      </div>
    </Layout>
  );
}
