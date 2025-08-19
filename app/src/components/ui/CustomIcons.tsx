interface Props {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

interface PropsLogo {
  className?: string;
  children?: React.ReactNode;
}

const CustomLogo = ({ src, alt = "Logo", className = "w-16 h-16" }: Props) => {
  return <img src={src} loading={"lazy"} alt={alt} className={className} />;
};

export const TourDeApp = ({ className }: PropsLogo) => {
  return <CustomLogo src="https://tourde.app/_nuxt/logo.BRGNV3jG.webp" alt="Tour De App" className={className}/>
}

export default CustomLogo;
