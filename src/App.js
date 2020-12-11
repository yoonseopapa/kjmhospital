import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Home from "./pages/home";
import AboutStory from "./pages/aboutStory";
import Laser from "./pages/laser";
import SkinCare from "./pages/skinCare";
import Treatment from "./pages/treatment";

const routes = [
  { path: "/", name: "Home", Component: Home},
  { path: "/aboutStory", name: "AboutStory", Component: AboutStory },
  { path: "/laser", name: "Laser", Component: Laser },
  { path: "/skinCare", name: "SkinCare", Component: SkinCare },
  { path: "/treatment", name: "Treatment", Component: Treatment }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
 
  return (
    <>
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
