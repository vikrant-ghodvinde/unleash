import { Suspense } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword";
import Auth from "./components/Auth/Auth";
import PageLoader from "./components/PageLoader";
import { useTranslation } from "react-i18next";
import Home from "./components/Home/Home";
import ScrollingText from "./components/video_componant/ScrollingText";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Playfair Display", "Lora", "PT Serif", "Bitter", "Arvo", "Rokkitt", "Roboto Slab", "Glegoo", "Slabo 27px", "Roboto Condensed", "Proza Libre", "Work Sans", "Oswald", "Roboto Flex"],
  },
});


const RedirectTemplate = React.lazy(() =>
  import("./components/Templates/RedirectTemplate")
);  
function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route      
            path=""
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="editor"
            element={
              <Suspense fallback={<PageLoader />}>
                <RedirectTemplate />
              </Suspense>
            }
          />
          <Route
            path="video"
            element={
              <Suspense fallback={<PageLoader />}>
                <ScrollingText />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<PageLoader />}>
                <Auth />
              </Suspense>
            }
          />
          <Route
            path="forget-password"
            element={
              <Suspense fallback={<PageLoader />}>
                <ForgetPassword />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
