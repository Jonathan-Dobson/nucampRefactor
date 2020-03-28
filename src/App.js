import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Directory from "./Pages/Directory/Directory";
import Campsite from "./Pages/Directory/Campsite";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

// App Components
import Header from "./Header";
import Footer from "./Footer";

const App = props => {
  const CampsiteWithId = r => <Campsite {...r} />;

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/directory/:campsiteId" render={CampsiteWithId} />
        <Route path="/directory" component={Directory} />
        <Route path="/aboutus" component={About} />
        <Route path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
