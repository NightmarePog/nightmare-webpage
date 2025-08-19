import { ReactNode } from "react";

interface props {
    children: ReactNode
}

const Text = ({ children }: props) => {
  return <p className="text-2xl">{children}</p>;
};

export default Text;
