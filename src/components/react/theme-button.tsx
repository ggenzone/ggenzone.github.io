import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function ThemeButton() {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") setTheme(stored as "dark" | "light");
    const listener = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light");
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
    }
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton onClick={toggleTheme}>
        {theme === "dark" ? (
          <SunIcon className="w-4 h-4 mr-2" />
        ) : (
          <MoonIcon className="w-4 h-4 mr-2" />
        )}
        <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}