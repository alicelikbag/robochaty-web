import { Link, useLocation } from "wouter";
import {
  Twitter,
  Send,
  Menu,
  X,
  ChevronDown,
  Bot,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsMenuOpen(false);
    if (isAnchor && href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation(href);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 selection:text-primary-foreground">
      <header className="sticky top-0 z-[100] w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary text-foreground/80 outline-none">
                Bot <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-48 bg-black/95 backdrop-blur-xl border border-white/10 z-[110]"
              >
                <DropdownMenuItem
                  asChild
                  className="focus:bg-primary/20 focus:text-primary cursor-pointer"
                >
                  <Link href="/snipe-bot">Snipe Bot</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="focus:bg-primary/20 focus:text-primary cursor-pointer"
                >
                  <Link href="/grid-bot">Grid Bot</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => handleNavClick("/#roadmap", true)}
              className="transition-colors hover:text-primary text-foreground/80 bg-transparent border-none p-0 font-medium cursor-pointer"
            >
              Roadmap
            </button>
            <Link
              href="/airdrop"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Airdrop
            </Link>
            <Link
              href="/leaderboard"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Leaderboard
            </Link>
            <Link
              href="/litepaper"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Litepaper
            </Link>
            <Link
              href="/team"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Team
            </Link>

            {/* VIRTUALS BUY BUTTON */}
            <a
              href="https://app.virtuals.io/prototypes/0xd028C8338B37C62506E56cFb1F51019869C2B7d1"
              target="_blank"
              rel="noreferrer"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/40 hover:border-secondary transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-secondary/10 blur-md group-hover:bg-secondary/20 transition-all"></span>
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span className="relative z-10 text-[13px] font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                BUY $CHATY
              </span>
              <ExternalLink className="w-3 h-3 text-secondary/70 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://x.com/RoboChaty"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-[#1DA1F2] transition-colors transform hover:scale-110 duration-200"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://t.me/robochatybot"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-[#0088cc] transition-colors transform hover:scale-110 duration-200"
            >
              <Send className="h-5 w-5" />
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-secondary border-none hover:opacity-90 text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="/whitelist">Join Whitelist</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl p-4 space-y-4 animate-in slide-in-from-top-2">
            <Link
              href="/"
              className="block py-2 px-4 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="px-4 py-2">
              <div className="text-sm font-medium text-foreground/80 mb-2 flex items-center gap-2">
                <Bot className="h-4 w-4" /> Bot Tools
              </div>
              <div className="pl-4 space-y-2 border-l border-white/10">
                <Link
                  href="/snipe-bot"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Snipe Bot
                </Link>
                <Link
                  href="/grid-bot"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Grid Bot
                </Link>
              </div>
            </div>

            <button
              onClick={() => handleNavClick("/#roadmap", true)}
              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors hover:text-primary bg-transparent border-none"
            >
              Roadmap
            </button>
            <Link
              href="/airdrop"
              className="block py-2 px-4 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Airdrop
            </Link>
            <Link
              href="/leaderboard"
              className="block py-2 px-4 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              href="/litepaper"
              className="block py-2 px-4 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Litepaper
            </Link>
            <Link
              href="/team"
              className="block py-2 px-4 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>

            <a
              href="https://app.virtuals.io/prototypes/0xd028C8338B37C62506E56cFb1F51019869C2B7d1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-secondary to-primary text-white font-bold text-sm shadow-lg shadow-secondary/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="w-4 h-4" />
              BUY $CHATY ON VIRTUALS
            </a>

            <div className="flex items-center space-x-6 pt-4 border-t border-border/40 px-4 mt-2">
              <a
                href="https://x.com/RoboChaty"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/60 hover:text-[#1DA1F2]"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://t.me/robochatybot"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/60 hover:text-[#0088cc]"
              >
                <Send className="h-6 w-6" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 relative overflow-hidden">
        {/* Arka plan efektleri için z-index negatif tutuldu */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none -z-10 opacity-50 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none -z-10 opacity-50 mix-blend-screen" />
        {children}
      </main>

      <footer className="border-t border-white/5 bg-black/40 backdrop-blur-xl py-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-20" />
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                RoboChaty
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-[250px] text-center md:text-left leading-relaxed">
              Advanced AI Trading Tools for the Decentralized Era.
            </p>
          </div>
          <div className="hidden lg:flex items-center space-x-8 text-sm text-muted-foreground/60">
            <Link
              href="/litepaper"
              className="hover:text-primary transition-colors"
            >
              Litepaper
            </Link>
            <Link
              href="/snipe-bot"
              className="hover:text-primary transition-colors"
            >
              Snipe Bot
            </Link>
            <Link
              href="/grid-bot"
              className="hover:text-primary transition-colors"
            >
              Grid Bot
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="https://x.com/RoboChaty"
              target="_blank"
              rel="noreferrer"
              className="group p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-[#1DA1F2] transition-colors" />
            </a>
            <a
              href="https://t.me/robochatybot"
              target="_blank"
              rel="noreferrer"
              className="group p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <Send className="h-5 w-5 text-muted-foreground group-hover:text-[#0088cc] transition-colors" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground/40 font-medium">
            Built on Virtuals Protocol
          </div>
          <div className="text-xs text-muted-foreground/60 font-mono">
            © {new Date().getFullYear()}{" "}
            <span className="text-primary/80">RoboChaty</span>. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
