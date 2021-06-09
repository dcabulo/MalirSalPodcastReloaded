import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutUs from "./pages/AboutUs";
import Episodes from "./pages/Episodes";
import Faq from "./pages/Faq";
import Home from "./pages/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
