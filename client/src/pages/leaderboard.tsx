import { Layout } from "@/components/layout";
import { Trophy, ExternalLink, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

// Yeni Top 5 Kullanıcı Verisi (GÜNCELLENDİ)
const topUsers = [
  {
    rank: 1,
    handle: "@0xinfinix",
    url: "https://x.com/0xinfinix",
    score: "99.2",
  },
  {
    rank: 2,
    handle: "@LunaraXBT",
    url: "https://x.com/LunaraXBT",
    score: "97.5",
  },
  {
    rank: 3,
    handle: "@ImKovace",
    url: "https://x.com/ImKovace",
    score: "95.8",
  },
  {
    rank: 4,
    handle: "@Chainriffs",
    url: "https://x.com/Chainriffs",
    score: "93.4",
  },
  {
    rank: 5,
    handle: "@Im_inoti",
    url: "https://x.com/Im_inoti",
    score: "91.9",
  },
];

export default function Leaderboard() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
  }, []);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden py-20">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-background perspective-1000 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-4 animate-in fade-in zoom-in duration-1000 delay-100">
          {/* Başlık Alanı */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(124,92,255,0.3)] animate-float">
              <Trophy className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent">
                TOP INFLUENCERS
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Monthly rewards distributed based on engagement.
            </p>
          </div>

          {/* Leaderboard Tablosu */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Tablo Başlıkları */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-white/5 text-sm font-mono text-muted-foreground">
              <div className="col-span-2 text-center">RANK</div>
              <div className="col-span-6 md:col-span-7 pl-4">USER</div>
              <div className="col-span-4 md:col-span-3 text-right pr-4">
                ACTION
              </div>
            </div>

            {/* Liste Elemanları */}
            <div className="divide-y divide-white/5">
              {topUsers.map((user, index) => (
                <div
                  key={user.handle}
                  className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group"
                >
                  {/* Sıralama Numarası */}
                  <div className="col-span-2 flex justify-center">
                    <span
                      className={`
                      flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm
                      ${
                        index === 0
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]"
                          : index === 1
                            ? "bg-slate-400/20 text-slate-300 border border-slate-400/50"
                            : index === 2
                              ? "bg-orange-700/20 text-orange-400 border border-orange-700/50"
                              : "bg-white/5 text-muted-foreground"
                      }
                    `}
                    >
                      {user.rank}
                    </span>
                  </div>

                  {/* Kullanıcı Bilgisi + Profil Resmi */}
                  <div className="col-span-6 md:col-span-7 flex items-center gap-4 pl-2">
                    <div className="relative">
                      <img
                        src={`https://unavatar.io/twitter/${user.handle.replace("@", "")}`}
                        alt={user.handle}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/10 group-hover:border-primary/50 transition-colors bg-white/5"
                      />
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black ${index < 3 ? "bg-green-500" : "bg-gray-500"}`}
                      ></div>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                        {user.handle}
                      </span>
                      <span className="text-xs text-muted-foreground hidden md:block">
                        Engagement Score:{" "}
                        <span className="text-primary font-mono font-bold">
                          {user.score}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Link Butonu */}
                  <div className="col-span-4 md:col-span-3 flex justify-end pr-2">
                    <a
                      href={user.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 transition-all text-xs font-medium text-white group-hover:shadow-[0_0_15px_rgba(124,92,255,0.2)]"
                    >
                      <span className="hidden sm:inline">Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dinamik Tarih Alanı */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/5 text-xs text-muted-foreground backdrop-blur-sm">
              <CalendarDays className="w-3 h-3 text-primary" />
              <span>Leaderboard Updated:</span>
              <span className="text-white font-mono">{currentDate}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
