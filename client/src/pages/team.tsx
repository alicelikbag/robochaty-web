import { Layout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Github, Code, Share2, Rocket, ExternalLink } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Kerim Akay",
    role: "Founder & AI Architect",
    image: "/team3.jpeg", // Public klasöründeki yol
    gradient: "from-primary to-secondary",
    github: null,
  },
  {
    id: 2,
    name: "İlyas Kürk",
    role: "Lead Software Developer",
    image: "/team2.jpeg",
    gradient: "from-primary/80 to-secondary/80",
    github: "ilyaskurk",
  },
  {
    id: 3,
    name: "Ömer Aydın",
    role: "Software Developer",
    image: "/team1.jpeg",
    gradient: "from-primary/80 to-secondary/80",
    github: "omeraydin",
  },
  {
    id: 4,
    name: "Tarık Akay",
    role: "Social Media Manager",
    image: "/team2.jpeg",
    gradient: "from-secondary to-cyan-500",
    github: "tarikakay",
  },
];

export default function Team() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Meet the{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
              Builders
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A specialized team combining AI expertise, advanced engineering, and
            strategic communication to build the RoboChaty ecosystem.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group perspective-1000 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="glass-card border-white/10 h-full transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] relative overflow-hidden flex flex-col bg-card/40">
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="text-center pt-10 pb-4 flex-grow relative z-10">
                  {/* PHOTO CONTAINER */}
                  <div className="w-32 h-32 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.3)] bg-background">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Resim üzerinde hafif bir overlay (isteğe bağlı) */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${member.gradient} opacity-10 group-hover:opacity-0 transition-opacity`}
                    />
                  </div>

                  <CardTitle className="text-2xl font-bold mb-1 tracking-tight text-foreground">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-secondary font-semibold text-sm uppercase tracking-widest">
                    {member.role}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-8 pt-4 relative z-10">
                  {member.github ? (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/5 hover:border-primary/40 hover:bg-white/10 text-muted-foreground hover:text-white transition-all duration-300 group/link"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-tighter">
                        GitHub Profile
                      </span>
                    </a>
                  ) : (
                    <div className="h-9 flex items-center justify-center italic text-xs text-muted-foreground/60 border-t border-white/5 pt-4">
                      Core Strategic Lead
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
