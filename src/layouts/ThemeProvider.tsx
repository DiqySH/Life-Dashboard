import {
  ThemeProvider as ReactThemesProvider,
  ThemeProviderProps,
} from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <ReactThemesProvider {...props}>{children}</ReactThemesProvider>;
};

export { ThemeProvider }
