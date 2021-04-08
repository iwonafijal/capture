// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path={process.env.PUBLIC_URL + "/"} exact>
            <AboutUs />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/work"} exact>
            <OurWork />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/work/:id"}>
            <MovieDetail />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/contact"}>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
