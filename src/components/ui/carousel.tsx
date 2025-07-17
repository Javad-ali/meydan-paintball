import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Carousel = ({
  children,
  className,
}: {
  children: React.ReactNode[];
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % children.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [children.length]);

  return (
    <div className={cn("relative w-full  overflow-hidden", className)}>

      {children.map((child, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
