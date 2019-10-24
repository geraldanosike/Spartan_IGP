import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClientPage from "./ClientPage";
import SignUp from "./SignUp";
import Login from "./LogIn";
import AdminPage from "./AdminPage";
import AddJobs from "./AddJobs";
import Alljobs from "./AllJobs";
import Blog from "./Blogs";
import Blogdetails from "./Blogdetails";
import jobdetails from "./JobDetails";
import Apply from './Apply'

//`/allJobs/${title}/${type}
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ClientPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/Admin" component={AdminPage} />
        <Route path="/View_Jobs" component={AdminPage} />
        <Route path="/Add_Jobs" component={AddJobs} />
        <Route path="/allJobs" component={Alljobs} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Blog:PostId" component={Blogdetails} />
        <Route path="/jobdetails/:JobId" component={jobdetails} />
        <Route path="/Apply" component={Apply}/>
      </Switch>
    </Router>
  );
}

export default App;
