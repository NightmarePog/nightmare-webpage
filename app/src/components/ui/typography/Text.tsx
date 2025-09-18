import useIsMobile from "@/hook/useIsMobile";
import { ReactNode } from "react";

interface props {
    children: ReactNode
}

const Text = ({ children }: props) => {
  const isMobile = useIsMobile();
  return <p className={isMobile? "text-md" :"text-2xl"}>{children}</p>;
};

export default Text;
