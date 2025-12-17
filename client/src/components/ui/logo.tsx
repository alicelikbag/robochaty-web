import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className, showText = true, variant = "default", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24"
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-0.5 shadow-lg shadow-primary/20 transition-transform hover:scale-105", sizeClasses[size])}>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <img 
          src="/logo.png" 
          alt="RoboChaty Logo" 
          className="relative h-full w-full object-cover rounded-[10px]"
        />
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center">
          <span className={cn(
            "font-display font-bold leading-none tracking-tight",
            size === "sm" ? "text-lg" : "text-xl",
            variant === "light" ? "text-white" : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          )}>
            RoboChaty
          </span>
          <span className={cn(
            "text-xs font-normal tracking-wide opacity-80",
            size === "sm" ? "hidden" : "block",
            variant === "light" ? "text-white/70" : "text-muted-foreground"
          )}>
            AI Assistant Bot
          </span>
        </div>
      )}
    </div>
  );
}
