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
    name: "Karim Veerman",
    role: "Founder & AI Architect",
    image: "/team3.jpeg", // Public klasöründeki yol
    gradient: "from-primary to-secondary",
    github: null,
  },
  {
    id: 2,
    name: "İlyas Kürk",
    role: "Lead Software Developer",
    image: "/team4.jpeg",
    gradient: "from-primary/80 to-secondary/80",
    github: "kurkilyas",
  },
  {
    id: 3,
    name: "Ömer Aydın",
    role: "Software Developer",
    image: "/team1.jpeg",
    gradient: "from-primary/80 to-secondary/80",
    github: "sektor7k",
  },
  {
    id: 4,
    name: "Tarık Akay",
    role: "Social Media Manager",
    image: "/team2.jpeg",
    gradient: "from-secondary to-cyan-500",
    github: "akaytarik",
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
              <Card className="glass-card border-white/10 h-full transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(0,229,255,0.25)] relative overflow-hidden flex flex-col bg-card/60 backdrop-blur-xl">
                {/* Sabit Gradient Arka Plan (Solukluğu giderir) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="text-center pt-10 pb-4 flex-grow relative z-10">
                  {/* PHOTO CONTAINER - Daha canlı ve belirgin */}
                  <div className="w-32 h-32 mx-auto rounded-full border-2 border-primary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden shadow-[0_0_25px_rgba(0,229,255,0.4)] bg-black/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      /* Grayscale kaldırıldı, resim direkt renkli başlıyor */
                      className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                    {/* Resim üzerine renk filtresi yerine sadece parlama overlay'i */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                  </div>

                  <CardTitle className="text-2xl font-bold mb-1 tracking-tight text-white group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-secondary font-bold text-sm uppercase tracking-[0.2em]">
                    {member.role}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-8 pt-4 relative z-10">
                  {member.github ? (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 hover:border-primary hover:bg-primary hover:text-white text-primary transition-all duration-300 group/link shadow-lg shadow-primary/5"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        GitHub Profile
                      </span>
                    </a>
                  ) : (
                    <div className="h-10 flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80 border-t border-white/5 pt-4">
                      Strategic Lead
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
