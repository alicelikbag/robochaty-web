import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Rocket, ShieldCheck, TrendingUp, Globe, Users } from "lucide-react";

const Section = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: any;
  children: React.ReactNode;
}) => (
  <Card className="glass-card border-white/10 mb-10 overflow-hidden hover:border-primary/30 transition-all duration-500">
    <CardContent className="p-8 md:p-10 space-y-6">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-6 h-6 text-primary" />}
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      {children}
    </CardContent>
  </Card>
);

export default function Litepaper() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* HEADER */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
            RoboChaty Litepaper
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A conversational AI redefining crypto trading and market intelligence.
          </p>
        </div>

        {/* 1. INTRODUCTION */}
        <Section title="1. Introduction" icon={Rocket}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            The crypto market is full of speed and opportunities, but capturing these often requires technical expertise, constant monitoring, and complex tools. 
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <span className="text-foreground font-semibold">RoboChaty</span> eliminates all this complexity: Perform market analysis, get instant answers to your questions, and execute the most advanced trading strategies (snipe, grid, etc.) through simple chat using natural language commands.
          </p>
        </Section>

        {/* 2. PROBLEM */}
        <Section title="2. Problem" icon={Target}>
          <ul className="space-y-4">
            {[
              "Sniping newly launched tokens quickly and safely is difficult.",
              "Setting up and managing profitable strategies like Grid Trading requires technical knowledge.",
              "Missing market opportunities and manual trading leads to significant time loss.",
              "Existing tools are not chat-based and are far from being user-friendly.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 mt-2 shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 3. SOLUTION */}
        <Section title="3. Solution: RoboChaty" icon={Zap}>
          <p className="text-muted-foreground leading-relaxed">
            RoboChaty is a fully chat-based, AI-powered crypto assistant built on the **Virtuals Protocol**. It enables anyone to use powerful trading tools without requiring technical expertise.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Core Features (Available Now)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Instant financial advisory and market inquiries",
                "Direct buy-sell transactions via chat",
                "Real-time market intelligence (news, on-chain data, sentiment)",
                "Personalized AI agent (risk profile and strategy suggestions)",
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-primary/5 p-4 border border-white/10 italic text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 space-y-6">
            <h3 className="text-lg font-semibold text-foreground border-b border-white/10 pb-2">Upcoming Featured Trading Tools</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h4 className="text-primary font-bold mb-2">AI Snipe Mode (Q1 2026)</h4>
                <p className="text-xs text-muted-foreground mb-3">Detects new launches and price movements with rug-check and liquidity filters.</p>
                <p className="text-[10px] font-mono text-secondary">"Enable snipe mode, snipe new tokens on Solana with $100."</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h4 className="text-secondary font-bold mb-2">Grid Trading Mode (Q1 2026)</h4>
                <p className="text-xs text-muted-foreground mb-3">Autonomous grid bot for volatile markets with take-profit and stop-loss.</p>
                <p className="text-[10px] font-mono text-secondary">"Set up a SOL grid between $180-$220 with $2000 budget."</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. TARGET AUDIENCE */}
        <Section title="4. Target Audience" icon={Users}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "All crypto investors (beginners to pros)",
              "Memecoin and launch snipers",
              "Passive income seekers via grid strategies",
              "Users wanting advanced tools without technical knowledge",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </Section>

        {/* 5. ROADMAP */}
        <Section title="5. Roadmap" icon={Rocket}>
          <div className="space-y-6 border-l-2 border-primary/20 pl-6">
            <div>
              <h4 className="font-bold text-primary">2025 – Foundation Phase (Completed / Ongoing)</h4>
              <p className="text-sm text-muted-foreground">Mainnet Launch, Virtuals TGE, AI Assistant Core, Market Intelligence.</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary">2026 Q1 – Advanced Trading Intelligence</h4>
              <p className="text-sm text-muted-foreground">Grid Trading, AI Snipe Mode, Fully Autonomous Website, Personalized AI Agent.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground/70">2026 Q2 – Predictive & Portfolio AI</h4>
              <p className="text-sm text-muted-foreground">AI Futures Prediction, Smart Portfolio Rebalancing, Cross-Chain Tracking.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground/50">2026 Q3 – Institutional & Web3 Expansion</h4>
              <p className="text-sm text-muted-foreground">DAO Support, On-Chain Analysis, AI Copy Trading, Developer SDK.</p>
            </div>
          </div>
        </Section>

        {/* 6. ECOSYSTEM AND COMMUNITY */}
        <Section title="6. Ecosystem & Community" icon={Globe}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <a href="https://robochaty.com" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/5 transition-all">
              <span className="text-xs text-muted-foreground block mb-1">Official Website</span>
              <span className="font-bold">robochaty.com</span>
            </a>
            <a href="https://x.com/RoboChaty" target="_blank" rel="noreferrer" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/5 transition-all">
              <span className="text-xs text-muted-foreground block mb-1">X (Twitter)</span>
              <span className="font-bold">@RoboChaty</span>
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Join our community to follow early test opportunities and developments.
          </p>
        </Section>

        {/* 7. VISION */}
        <Section title="7. Vision" icon={ShieldCheck}>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              RoboChaty makes financial operations as simple and powerful as a conversation. With our upcoming AI Snipe Mode and Grid Trading, we offer a future where opportunities are never missed and profits are generated continuously.
            </p>
            <p className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pt-4">
              RoboChaty – The New Face of Finance.
            </p>
          </div>
        </Section>
      </div>
    </Layout>
  );
}