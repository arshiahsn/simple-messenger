import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"OpenSans-regular"',
    color: "#3A8DFF",
    fontSize: 12,
    h1: {
      // could customize the h1 variant as well
      
    },
    
  },
  palette: {
    primary: { main: "#DF1B1B" },
    secondary: {main: "#8bc34a"},
    button: {main: "#616161"}
  }
});
