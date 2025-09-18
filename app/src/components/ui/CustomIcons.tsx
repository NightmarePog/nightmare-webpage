interface Props {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties
}

interface PropsLogo {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties
}

const CustomLogo = ({ src, alt = "Logo", className = "w-16 h-16", style }: Props) => {
  return <img src={src} loading={"lazy"} alt={alt} className={className} style={style}/>;
};

export const TourDeApp = ({ className, style }: PropsLogo) => {
  return <CustomLogo src="https://tourde.app/_nuxt/logo.BRGNV3jG.webp" alt="Tour De App" style={style} className={className}/>
}

export default CustomLogo;
