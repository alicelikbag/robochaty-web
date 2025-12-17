import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Litepaper from "@/pages/litepaper";
import SnipeBot from "@/pages/snipe-bot";
import GridBot from "@/pages/grid-bot";
import Whitelist from "@/pages/whitelist";
import Team from "@/pages/team";
import Airdrop from "@/pages/airdrop";
import Leaderboard from "@/pages/leaderboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/litepaper" component={Litepaper} />
      <Route path="/snipe-bot" component={SnipeBot} />
      <Route path="/grid-bot" component={GridBot} />
      <Route path="/whitelist" component={Whitelist} />
      <Route path="/team" component={Team} />
      <Route path="/airdrop" component={Airdrop} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
