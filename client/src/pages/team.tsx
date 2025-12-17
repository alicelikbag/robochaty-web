import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Brain, Code, Database, ExternalLink } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "AI Architect",
    icon: Brain,
    gradient: "from-primary to-purple-600",
    github: "alexrivera",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Blockchain Lead",
    icon: Code,
    gradient: "from-secondary to-cyan-600",
    github: "sarahchen",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Product Strategy",
    icon: Database,
    gradient: "from-accent to-pink-600",
    github: "marcusthorne",
  },
];

export default function Team() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Builders</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse team of AI researchers, blockchain engineers, and financial experts building the future of DeFi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`group perspective-1000 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${index * 100}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="glass-card border-white/10 h-full transition-all duration-500 transform hover:-translate-y-2 hover:rotate-y-6 hover:shadow-[0_0_30px_rgba(124,92,255,0.2)] relative overflow-hidden flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="text-center pt-10 pb-4 flex-grow">
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-md relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`} />
                    <member.icon className="w-12 h-12 text-white/90 relative z-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium text-lg">{member.role}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-8 pt-4 border-t border-white/5">
                  <a 
                    href={`https://github.com/${member.github}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-all duration-300 group/link hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
