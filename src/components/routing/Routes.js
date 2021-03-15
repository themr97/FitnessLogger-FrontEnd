import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Tracker from "../tracker/Tracker";
import About from "../about/About";
import Help from "../help/Help";
import NotFound from "../layout/NotFound";
import PrivateRoute from "../routing/PrivateRoute";
import Alert from "../layout/Alert";
import { Container } from "reactstrap";
import BootStrapNav from "../layout/BootStrapNav";
import Footer from "../layout/Footer";
import Home from '../home/Home';

var phantom = {
  display: 'block',
  padding: '20px',
  height: '50px',
  width: '100%',
}

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}


const Routes = () => {
  return (
    <Container fluid={true} style={{minHeight:"100vh"}} className="p-0 m-0 bg-secondary">
      <BootStrapNav app={Routes} />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/help" component={Help} />
        <PrivateRoute exact path="/tracker" component={Tracker} />
        <Route component={NotFound} />
      </Switch>
      <div>
            <div style={phantom} />
            <div style={style}>
                <Footer/>
            </div>
        </div>
    </Container>
  );
};

export default Routes;
