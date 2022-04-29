import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import FindTutor from "./pages/FindTutor";
import PricePlan from "./pages/PricePlan";
import Quran from "./pages/Quran";
import Qaida from "./pages/Qaida";
import Aboutus from "./pages/Aboutus";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ToS from "./pages/ToS";
import Testimonials from "./pages/Testimonials";
import FaQ from "./pages/FaQ";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Logout from "./components/Logout";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import { initialState, reducer } from "./reducer/UseReducer";
// 1 context api
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Navbar />
      <UserContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/findtutors" component={FindTutor} />
          <Route path="/priceplan" component={PricePlan} />
          <Route path="/quran" component={Quran} />
          <Route path="/qaida" component={Qaida} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/contact" component={Contact} />
          <Route path="/courses" component={Courses} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/tos" component={ToS}></Route>
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/faqs" component={FaQ} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" component={Logout} />
          <Route component={Error} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
};

export default App;
