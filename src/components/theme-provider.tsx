"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes"; // Import NextThemesProvider from next-themes
import { ThemeProviderProps } from "next-themes/dist/types"; // Import type for props from next-themes

// This is a wrapper component that simply uses NextThemesProvider
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>; // Pass props to the NextThemesProvider
}
