import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    violet: Palette["primary"];
  }

  interface PaletteOptions {
    violet?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    violet: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#000" },
    secondary: { main: "#c039ff" },
    violet: { main: "#7C27F7" },
  },
});
