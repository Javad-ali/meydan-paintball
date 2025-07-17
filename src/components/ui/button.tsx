import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size?:string
};

const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => {
  return (
    <button
      className={cn(
        "px-6 py-3 bg-primary text-white rounded-2xl font-semibold hover:opacity-90 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
