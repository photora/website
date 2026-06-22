import { cn } from "@/lib/utils";

interface ViewfinderProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * A decorative frame with corner brackets echoing a camera viewfinder.
 * The signature design element for Photora.
 */
export function Viewfinder({
  children,
  className,
  size = "md",
}: ViewfinderProps) {
  const cornerSize = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }[size];

  const borderWidth = {
    sm: "border-[1.5px]",
    md: "border-2",
    lg: "border-[3px]",
  }[size];

  return (
    <div className={cn("relative", className)}>
      {/* Top-left corner */}
      <div
        className={cn(
          "absolute top-0 left-0 border-primary",
          borderWidth,
          "border-b-0 border-r-0",
          cornerSize,
        )}
      />
      {/* Top-right corner */}
      <div
        className={cn(
          "absolute top-0 right-0 border-primary",
          borderWidth,
          "border-b-0 border-l-0",
          cornerSize,
        )}
      />
      {/* Bottom-left corner */}
      <div
        className={cn(
          "absolute bottom-0 left-0 border-primary",
          borderWidth,
          "border-t-0 border-r-0",
          cornerSize,
        )}
      />
      {/* Bottom-right corner */}
      <div
        className={cn(
          "absolute bottom-0 right-0 border-primary",
          borderWidth,
          "border-t-0 border-l-0",
          cornerSize,
        )}
      />
      {children}
    </div>
  );
}
