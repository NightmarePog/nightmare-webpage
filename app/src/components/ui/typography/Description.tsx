import { ReactNode } from "react";


interface props {
  children: ReactNode
}

export function Description({ children }: props) {
  return (
      <p className="text-secondary text-[20px]">
        {children}
      </p>
  );
}
