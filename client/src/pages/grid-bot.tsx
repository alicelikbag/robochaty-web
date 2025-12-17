import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Grid3X3, BarChart2, DollarSign, TrendingUp } from "lucide-react";

export default function GridBot() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-4 py-1 rounded-full text-sm">
            <TrendingUp className="w-3 h-3 mr-2" /> 24/7 Automated Trading
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Grid Trading Mode</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profit from volatility automatically. Buy low, sell high, repeat.
          </p>
        </div>

        {/* Existing Section Placeholder */}
        <section className="mb-20">
           <div className="flex flex-col items-center justify-center p-12 border border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm">
             <h2 className="text-2xl font-bold mb-2">Manual Grid Setup</h2>
             <p className="text-muted-foreground mb-6">Manual configuration tools coming soon.</p>
             <Badge variant="outline" className="border-primary/50 text-primary">COMING SOON</Badge>
           </div>
        </section>

        {/* New Grid Trading Mode Section */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             {/* Visual/Image Placeholder - Left side this time for variety */}
             <div className="relative order-2 md:order-1">
               <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
               <Card className="glass-card border-white/10 h-[500px] flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                 <div className="relative z-10 text-center p-8">
                   <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-secondary/30 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                     <Grid3X3 className="w-10 h-10 text-secondary" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Grid Performance</h3>
                   <p className="text-muted-foreground text-sm">
                     [Placeholder for Grid Bot Diagram showing buy/sell orders executing within price range]
                   </p>
                 </div>
               </Card>
             </div>

             <div className="space-y-6 order-1 md:order-2">
               <div className="inline-flex items-center space-x-2 text-primary font-medium tracking-wider text-sm uppercase">
                 <BarChart2 className="w-4 h-4" />
                 <span>Consistent Profits</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                 Master the <span className="text-secondary">Ranging Market</span>
               </h2>
               
               <div className="space-y-4 text-muted-foreground leading-relaxed">
                 <p>
                   Grid trading is one of the most effective strategies during ranging or moderately volatile markets. However, setting up and managing grid bots on traditional platforms is complex and requires constant monitoring.
                 </p>
               </div>

               <Card className="bg-black/40 border-secondary/20 mt-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent pointer-events-none" />
                 <CardContent className="p-6">
                   <p className="text-sm text-muted-foreground mb-2 font-mono">Example command:</p>
                   <p className="text-lg font-medium text-white font-mono">
                     "Create a grid bot for SOL between $180 and $220 with a $2000 budget, using $100 per grid."
                   </p>
                 </CardContent>
               </Card>

               <div className="pt-4">
                 <h3 className="font-semibold text-white mb-2">RoboChaty automatically:</h3>
                 <ul className="space-y-3">
                   <li className="flex items-start text-muted-foreground">
                     <div className="mt-1 mr-3 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#00E5FF]" />
                     <span>Places buy and sell orders at equal intervals within your defined price range</span>
                   </li>
                   <li className="flex items-start text-muted-foreground">
                     <div className="mt-1 mr-3 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#00E5FF]" />
                     <span>Buys as the price drops and sells as the price rises</span>
                   </li>
                   <li className="flex items-start text-muted-foreground">
                     <div className="mt-1 mr-3 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#00E5FF]" />
                     <span>Continuously realizes profits and reopens new grid levels</span>
                   </li>
                   <li className="flex items-start text-muted-foreground">
                     <div className="mt-1 mr-3 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#00E5FF]" />
                     <span>Manages risk using trailing take-profit, dynamic grid adjustments, and stop-loss protection</span>
                   </li>
                 </ul>
               </div>

               <p className="text-white/80 font-medium italic border-l-4 border-primary pl-4 py-2">
                 Grid Trading Mode works 24/7, generating profits even while you sleep.
               </p>
             </div>
           </div>
        </section>
      </div>
    </Layout>
  );
}
