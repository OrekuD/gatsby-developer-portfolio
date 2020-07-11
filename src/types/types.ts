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

export interface ProjectProps {
  name: string;
  featured?: boolean;
  url?: string;
  github?: string;
  image: string;
  description: string;
  stack: Array<{ id: string; name: string }>;
}
