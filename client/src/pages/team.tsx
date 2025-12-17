import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Brain, Code, Terminal, Database } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Coming Soon",
    role: "AI Architect",
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    name: "Coming Soon",
    role: "Blockchain Lead",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Coming Soon",
    role: "Product Strategy",
    icon: Database,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    name: "Coming Soon",
    role: "Security Engineer",
    icon: Terminal,
    gradient: "from-emerald-500 to-green-500",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`group perspective-1000 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${index * 100}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="glass-card border-white/10 h-full transition-all duration-500 transform hover:-translate-y-2 hover:rotate-y-12 hover:shadow-[0_0_30px_rgba(124,92,255,0.2)] relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl backdrop-blur-md">
                    <member.icon className="w-10 h-10 text-white/80" />
                  </div>
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-8">
                  <div className="flex justify-center space-x-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary cursor-pointer transition-colors">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary cursor-pointer transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-primary cursor-pointer transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
