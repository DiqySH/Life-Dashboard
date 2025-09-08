import { Button } from "./button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
    size="icon"
      variant={"ghost"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeButton;
