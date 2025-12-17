import { Link, useLocation } from "wouter";
import { Twitter, Send, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navLinks = [
    { href: "/", label: "Home", isAnchor: false },
    { href: "/#roadmap", label: "Roadmap", isAnchor: true },
    { href: "/airdrop", label: "Airdrop", isAnchor: false },
    { href: "/leaderboard", label: "Leaderboard", isAnchor: false },
  ];

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
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
          <Link href="/" className="mr-6 flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight hover:opacity-80 transition-opacity">
              RoboChaty
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href, link.isAnchor)}
                className="relative transition-colors hover:text-primary text-foreground/80 hover:text-primary group py-2 cursor-pointer bg-transparent border-none p-0 font-medium"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a href="https://x.com/RoboChaty" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#1DA1F2] transition-colors transform hover:scale-110 duration-200">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://t.me/robochatybot" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#0088cc] transition-colors transform hover:scale-110 duration-200">
              <Send className="h-5 w-5" />
            </a>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary border-none hover:opacity-90 text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5">
              <Link href="/whitelist">
                 Join Whitelist
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl p-4 space-y-4 animate-in slide-in-from-top-2">
             {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => handleNavClick(link.href, link.isAnchor)}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors hover:text-primary cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}
             <div className="flex items-center space-x-6 pt-4 border-t border-border/40 px-4">
                <a href="https://x.com/RoboChaty" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#1DA1F2]">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://t.me/robochatybot" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#0088cc]">
                  <Send className="h-6 w-6" />
                </a>
             </div>
          </div>
        )}
      </header>

      <main className="flex-1 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none -z-10 opacity-50 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none -z-10 opacity-50 mix-blend-screen" />
        
        {children}
      </main>

      <footer className="border-t border-border/40 bg-background/95 backdrop-blur py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">RoboChaty</span>
            <p className="text-sm text-muted-foreground">
              Advanced AI Trading Tools for Web3
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="https://x.com/RoboChaty" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#1DA1F2]/20 transition-colors">
                <Twitter className="h-5 w-5 group-hover:text-[#1DA1F2]" />
              </div>
            </a>
            <a href="https://t.me/robochatybot" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
               <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#0088cc]/20 transition-colors">
                <Send className="h-5 w-5 group-hover:text-[#0088cc]" />
              </div>
            </a>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground/60">
           © {new Date().getFullYear()} RoboChaty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
