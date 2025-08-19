interface props {
    children: string
}

const Text = ({ children }: props) => {
  return <p className="text-2xl">{children}</p>;
};

export default Text;
