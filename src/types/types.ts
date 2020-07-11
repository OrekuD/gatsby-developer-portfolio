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
  color: string;
  size: string;
}
