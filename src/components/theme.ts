import { createTheme } from "@mui/material/styles";

const colors = {
  black100: "#000000",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.black100,
    },
  },
});

export type Theme = typeof theme
