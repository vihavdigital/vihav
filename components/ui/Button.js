import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest",
    {
        variants: {
            variant: {
                default: "bg-gold-400 text-white hover:bg-gold-500 hover:shadow-lg transition-transform hover:-translate-y-0.5",
                destructive:
                    "bg-red-500 text-gray-50 hover:bg-red-500/90",
                outline:
                    "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white",
                secondary:
                    "bg-gray-100 text-gray-900 hover:bg-gray-100/80",
                ghost: "hover:bg-white/10 hover:text-gold-300",
                link: "text-gold-400 underline-offset-4 hover:underline",
                luxury: "bg-luxury-charcoal text-gold-400 border border-gold-400/30 hover:bg-luxury-black hover:border-gold-400",
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-md px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    );
});
Button.displayName = "Button";

export { Button, buttonVariants };
