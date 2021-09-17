import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
    <TopBar/>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        {user ? <Home/> : <Register />}
      </Route>
      <Route path="/login">
      {user ? <Home/> : <Login />}
      </Route>
      <Route path="/write">
      {user ? <Write/> : <Register />}
      </Route>
      <Route path="/setting">
      {user ? <Setting/> : <Register />}
      </Route>
      <Route path="/post/:postId">
        <Single />
      </Route>
    </Switch>




    </Router>
  );
}

export default App;
