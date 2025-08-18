import { ReactNode } from "react";


interface props {
  children: ReactNode
}

export function Description({ children }: props) {
  return (
      <p className="text-primary-foreground text-2xl max-w-md">
        {children}
      </p>
  );
}
