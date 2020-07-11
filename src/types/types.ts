export interface AppContext {
  darkTheme: boolean;
  toggleTheme: () => void;
}

export interface Colors {
  main: string;
  text: string;
  secondary: string;
}

export interface SvgProps {
  color?: string;
  size?: string;
  bgColor?: string;
}

export interface SocialLinks {
  id: string;
  icon: React.FC;
  href: string;
}
