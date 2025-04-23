import { Loader2 } from "lucide-react";

export default function LoadingSpinner({ className, size = "default" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    default: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <Loader2
      className={`animate-spin text-muted-foreground ${sizeClasses[size]} ${className}`}
    />
  );
}
