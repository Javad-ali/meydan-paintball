import React from "react";
import { cn } from "@/lib/utils";

const Card = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white text-black shadow-lg p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
