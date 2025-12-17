import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Litepaper() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
            RoboChaty Litepaper
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The future of automated crypto trading and analysis
          </p>
        </div>

        <Card className="glass-card border-white/10 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <CardContent className="p-8 md:p-12 prose prose-invert max-w-none">
            {/* CONTENT PLACEHOLDER - As the source text was not provided in the prompt context */}
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center border-2 border-dashed border-white/10 rounded-xl bg-black/20 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Litepaper Content</h3>
              <p className="text-muted-foreground mb-8">
                [PASTE THE FULL LITEPAPER ENGLISH TEXT YOU PROVIDED]
                <br/>
                <br/>
                (The full text content was referenced in the instructions but not provided in the accessible context. Please edit this file to insert the full Litepaper text.)
              </p>
              
              <div className="w-full max-w-md space-y-4 opacity-50">
                <div className="h-4 bg-white/10 rounded w-3/4 mx-auto animate-pulse"></div>
                <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-white/10 rounded w-5/6 mx-auto animate-pulse"></div>
                <div className="h-4 bg-white/10 rounded w-4/5 mx-auto animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
