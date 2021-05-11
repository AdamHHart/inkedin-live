import React, { useEffect, createContext, useState } from "react";
import "./App.css";
import "@fontsource/roboto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./component/User";
import Artworks from "./component/Artworks";
import Friends from "./component/Friends";
import JobsList from "./component/JobsList";
import JobsListItem from "./component/JobsListItem";
import PrimarySearchAppBar from "./component/Navbar";
import FormJobs from "./component/FormJobs";
import Empty from "./component/Empty";

import useApplicationData from "./hooks/useApplicationData";

export const JobsContext = createContext([]);

export default function App() {
  const { state, setActiveUser } = useApplicationData();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const userLogin = localStorage.getItem("User");
    if (userLogin) {
      const userFound = JSON.parse(userLogin);
      setActiveUser(userFound);
    }
  }, []);

  const onAdd = () => {
    setShow(true);
  };

  const artworks = (
    <div>
      <Artworks art={state.artworks} />
    </div>
  );

  const jobBoard = (
    <div>
      <JobsContext.Provider value={state.jobs}>
        {state.activeUser === 0 ? (
          <JobsList />
        ) : (
          <>
            <JobsList />
            {!show ? (
              <>
                <Empty onAdd={onAdd} />
                <h3>Add Job</h3>
              </>
            ) : (
              <FormJobs />
            )}
          </>
        )}
      </JobsContext.Provider>
    </div>
  );

  const job = (
    <div>
      <JobsContext.Provider value={state.jobs}>
        <JobsListItem />
      </JobsContext.Provider>
    </div>
  );

  return (
    <div className="App">
      <Router>
        <div>
          {
            <PrimarySearchAppBar
              onLogin={setActiveUser}
              activeUser={state.activeUser}
            />
          }
        </div>
        {/* <button onClick={changeFlag}>Load User</button> */}
        <div className="body_container">
          <div className="sidebar_container">
            <div className="messages_container">
              {/* <h1>{state.flag && state.messages[0].message}</h1>
              <h1>{state.flag && state.messages[1].message}</h1> */}
            </div>
          </div>

          <div className="main_container">
            <div className="users_container">
              {/* <h1>{state.flag && state.users[0].username}</h1> */}
            </div>
            <div className="artworks_container">
              {/* <h1>{state.flag && state.artworks[0].title}</h1>
              <h1>{state.flag && state.artworks[0].author_id}</h1>
              <h1>{state.flag && state.artworks[0].descrip}</h1>
              <h1>{state.flag && state.artworks[0].link}</h1>
              <h1>{state.flag && state.artworks[0].for_sale}</h1>
              <h1>{state.flag && state.artworks[0].price}</h1> */}
            </div>

            <div className="jobs_container">
              {/* <h1>{state.flag && state.jobs[0].title}</h1>
              <h1>{state.flag && state.jobs[0].description}</h1>
              <h1>{state.flag && state.jobs[0].user_id}</h1>
              <h1>{state.flag && state.jobs[0].pay}</h1> */}
            </div>
          </div>
          {/* <Artworks art={state.artworks} /> */}
        </div>
        {/* REACT ROUTER LINK TO MESSAGES */}
        <Switch>
          <Route
            path="/messages/"
            render={() => <Friends activeUser={state.activeUser} />}
          ></Route>
          <Route
            path="/portfolio/:id"
            children={<User activeUser={state.activeUser} />}
          ></Route>
          {/* <Route path="/art_showcase" render={() => artworks}></Route> */}
          <Route path="/job_board" render={() => jobBoard}></Route>
          <Route path="/jobs/:id" render={() => job}></Route>
          <Route path="/" render={() => artworks}></Route>
          {/* <Route path="/" redirect={</Route> */}
        </Switch>
      </Router>
    </div>
  );
}
