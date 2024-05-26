import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: { placement: "start" | "end"; component: React.ReactNode };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div
        className={`flex items-center justify-center ${icon?.component && "border focus-within:border-primary rounded-md"} `}
      >
        {icon?.component && icon.placement == "start" && (
          <div className="flex items-center pl-3 py-1 h-11 rounded-md rounded-tr-none rounded-br-none cursor-pointer">
            {icon.placement === "start" && icon.component}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-ỉnput bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            `${icon?.component && icon.placement === "start" && "border-0 border-l-0 rounded-tl-none rounded-bl-none focus-visible:ring-0"}`,
            `${icon?.component && icon.placement === "end" && "border-0 border-r-0 rounded-tr-none rounded-br-none focus-visible:ring-0"}`,
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon?.component && icon.placement && (
          <div className="flex items-center pr-3 py-1 h-11 rounded-md rounded-tl-none rounded-bl-none cursor-pointer">
            {icon.placement === "end" && icon.component}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
