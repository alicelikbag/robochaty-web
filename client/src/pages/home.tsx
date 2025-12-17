import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Bot, Zap, Shield, LineChart } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col min-h-[calc(100vh-64px)]">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
          
          <div className="z-10 max-w-4xl space-y-8 animate-in fade-in zoom-in duration-700">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              RoboChatty v1.0 Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Trading Intelligence for <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
                The Decentralized Era
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Automate your crypto strategy with AI-powered tools. Snipe launches, trade ranges, and manage risk—all from one interface.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg shadow-primary/25">
                <Link href="/snipe-bot">
                  Explore Snipe Bot <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                <Link href="/litepaper">
                  Read Litepaper
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-black/20 backdrop-blur-sm border-t border-white/5">
          <div className="container px-4 grid md:grid-cols-3 gap-8">
            <Link href="/snipe-bot" className="block group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="w-24 h-24" />
              </div>
              <Zap className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Snipe Mode</h3>
              <p className="text-muted-foreground">Detect and capture new token launches instantly with rug-check protection.</p>
            </Link>
            
            <Link href="/grid-bot" className="block group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <LineChart className="w-24 h-24" />
              </div>
              <LineChart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Grid Trading</h3>
              <p className="text-muted-foreground">Automate buy/sell orders in ranging markets to profit from volatility 24/7.</p>
            </Link>

            <Link href="/whitelist" className="block group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield className="w-24 h-24" />
              </div>
              <Shield className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Access</h3>
              <p className="text-muted-foreground">Join the whitelist to get early access to our verified smart contract tools.</p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
