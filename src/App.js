import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import SignupUserInformation from "./pages/signup/SignupUserInformation";
import SignupUserInterest from "./pages/signup/SignupUserInterest";
import SignIn from "./pages/signin/SignIn";
import Template from "./pages/template/Template";
import Explore from "./pages/childrenFrames/Explore";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/user-information":
        title = "";
        metaDescription = "";
        break;
      case "/user-interest":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
      case "/template":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user-information" element={<SignupUserInformation />} />
      <Route path="/user-interest" element={<SignupUserInterest />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/template" element={<Template children={<Explore />} />}> 
      </Route>
    </Routes>
  );
}
export default App;
