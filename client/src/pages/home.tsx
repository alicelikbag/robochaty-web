import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Shield, LineChart, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";

const roadmapPhases = [
  {
    phase: "2025 – Foundation Phase",
    status: "Live / In Progress",
    statusColor: "text-green-400",
    items: [
      "Mainnet Launch",
      "Virtuals TGE",
      "AI-Powered Crypto Assistant Core",
      "Real-Time Market Intelligence",
      "Early access to Grid Trading Mode and AI Snipe Mode for $CHATY holders",
    ],
    glow: "shadow-[0_0_30px_rgba(74,222,128,0.1)]",
    border: "border-green-500/20",
  },
  {
    phase: "2026 Q1 – Advanced Trading Intelligence",
    status: "Coming Soon",
    statusColor: "text-secondary",
    items: [
      "Grid Trading Mode",
      "AI Snipe Mode",
      "Fully Autonomous Website Support",
      "Personalized AI Agent",
    ],
    glow: "shadow-[0_0_30px_rgba(0,229,255,0.1)]",
    border: "border-secondary/20",
  },
  {
    phase: "2026 Q2 – Predictive & Portfolio AI",
    status: "Planned",
    statusColor: "text-primary",
    items: [
      "AI Futures Prediction Engine",
      "Smart Portfolio Rebalancing",
      "Cross-Chain Asset Tracking",
      "Risk Scoring & AI Hedging System",
    ],
    glow: "shadow-[0_0_30px_rgba(124,92,255,0.1)]",
    border: "border-primary/20",
  },
  {
    phase: "2026 Q3 – Institutional & Web3 Expansion",
    status: "Vision",
    statusColor: "text-accent",
    items: [
      "DAO & Institutional AI Support",
      "On-Chain Behavior Analysis",
      "AI Copy Trading",
      "Web3 API & Developer SDK",
    ],
    glow: "shadow-[0_0_30px_rgba(255,122,217,0.1)]",
    border: "border-accent/20",
  },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Fare pozisyonunu normalize et (-0.5 ile 0.5 arası)
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col min-h-[calc(100vh-64px)] w-full relative overflow-hidden bg-[#030303]">
        {/* INTERACTIVE BACKGROUND (Parallax Blobs) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)`,
              left: "15%",
              top: "5%",
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[100px] transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
              right: "10%",
              bottom: "10%",
            }}
          />
        </div>

        {/* HERO SECTION */}
        <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 relative z-10">
          <div className="relative z-10 w-full flex flex-col items-center max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
            {/* Logo fareyi takip eder */}
            <div
              className="flex justify-center mb-6 transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)`,
              }}
            >
              <Logo size="xl" showText={false} />
            </div>

            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              RoboChaty v1.0 Live
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Trading Intelligence for <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent italic">
                The Decentralized Era
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Automate your crypto strategy with AI-powered tools. Snipe
              launches, trade ranges, and manage risk — all from one interface.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* TELEGRAM BUTONU */}
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-[#0088cc] hover:bg-[#0077b5] transition-all shadow-lg shadow-[#0088cc]/25 group relative overflow-hidden"
              >
                <a
                  href="https://t.me/robochatybot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative z-10 flex items-center">
                    Start Trading on Telegram{" "}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  {/* Buton içi parıltı animasyonu */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="/litepaper">Read Litepaper</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ROADMAP SECTION */}
        <section id="roadmap" className="py-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/5 text-white border-white/10 px-4 py-1">
                Project Timeline
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Strategic Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {roadmapPhases.map((phase, index) => (
                <div
                  key={index}
                  className="transition-transform duration-500 ease-out"
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePos.y * 10}deg) rotateY(${mousePos.x * -10}deg)`,
                  }}
                >
                  <Card
                    className={`h-full glass-card bg-black/40 border-white/10 ${phase.glow} hover:border-primary/50 transition-colors`}
                  >
                    <CardHeader>
                      <div
                        className={`text-xs font-mono ${phase.statusColor} flex items-center`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full mr-2 bg-current animate-pulse" />
                        {phase.status}
                      </div>
                      <CardTitle className="text-lg font-bold leading-tight mt-2">
                        {phase.phase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {phase.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <div className="mt-1.5 mr-3 w-1 h-1 rounded-full bg-white/30" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-black/20 backdrop-blur-sm border-t border-white/5 w-full relative z-10">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <Link
              href="/snipe-bot"
              className="group w-full p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <Zap className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">AI Snipe Mode</h3>
              <p className="text-muted-foreground text-sm">
                Detect and capture new token launches instantly with rug-check
                protection.
              </p>
            </Link>

            <Link
              href="/grid-bot"
              className="group w-full p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <LineChart className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Grid Trading</h3>
              <p className="text-muted-foreground text-sm">
                Automate buy/sell orders in ranging markets to profit from
                volatility 24/7.
              </p>
            </Link>

            <Link
              href="/whitelist"
              className="group w-full p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <Shield className="w-10 h-10 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Secure Access</h3>
              <p className="text-muted-foreground text-sm">
                Join the whitelist to get early access to verified smart
                contract tools.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
