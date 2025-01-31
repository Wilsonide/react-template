import { Loader } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-8 w-8",
      icon: "h-10 w-10",
      xl: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type SpinnerProps = VariantProps<typeof spinnerVariants>

export const Spinner = ({ size, ...rest }: SpinnerProps) => {
  return <Loader className={cn(spinnerVariants({ size }))} {...rest} />;
};
