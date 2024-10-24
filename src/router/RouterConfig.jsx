import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import { createRoutesFromElements, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const MusicHub = lazy(() => import("../pages/MusicHub/MusicHub"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const RouterConfig = () =>
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {/* <Route
        path="music-hub"
        element={<PrivateRoute redirectTo="/signin" component={<MusicHub />} />}
      />
      <Route
        path="signin"
        element={<RestrictedRoute redirectTo="/" component={<SignIn />} />}
      />
      <Route
        path="signup"
        element={<RestrictedRoute redirectTo="/" component={<SignUp />} />}
      /> */}
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  );
