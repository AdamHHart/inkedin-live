import React from "react";
import "./App.css";
import "@fontsource/roboto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./component/User";
import Artwork from "./component/Artwork";
import Artworks from "./component/Artworks";
import Friend from "./component/Friend";
import Jobs from "./component/Jobs";
import Job from "./component/Job";
import Message from "./component/Message";
import PrimarySearchAppBar from "./component/Navbar";

import useApplicationData from "./hooks/useApplicationData";

export const JobsContext = React.createContext([]);

export default function App() {
  const { state } = useApplicationData();
  const getMessages = () => {
    if (state.flag) {
      return state.messages;
    }
    return [];
  };

  const messages = getMessages().map((message) => {
    return (
      <div>
        <Message message={message.message} />
      </div>
    );
  });

  const artworks = (
    <div>
      <Artworks art={state.artworks} />
    </div>
  );

  const jobBoard = (
    <div>
      <JobsContext.Provider value={state.jobs}>
        <Jobs />
      </JobsContext.Provider>
    </div>
  );

  const job = (
    <div>
      <JobsContext.Provider value={state.jobs}>
        <Job />
      </JobsContext.Provider>
    </div>
  );

  return (
    <div className="App">
      <Router>
        <div>{<PrimarySearchAppBar />}</div>
        {/* <button onClick={changeFlag}>Load User</button> */}
        <div className="body_container">
          <div className="sidebar_container">
            <div className="messages_container">
              <h1>{state.flag && state.messages[0].message}</h1>
              <h1>{state.flag && state.messages[1].message}</h1>
            </div>
          </div>

          <div className="main_container">
            <div className="users_container">
              <h1>{state.flag && state.users[0].username}</h1>
            </div>
            <div className="artworks_container">
              <h1>{state.flag && state.artworks[0].title}</h1>
              <h1>{state.flag && state.artworks[0].author_id}</h1>
              <h1>{state.flag && state.artworks[0].descrip}</h1>
              <h1>{state.flag && state.artworks[0].link}</h1>
              <h1>{state.flag && state.artworks[0].for_sale}</h1>
              <h1>{state.flag && state.artworks[0].price}</h1>
            </div>

            <div className="friends_container">
              <h1>{state.flag && state.friends[0].first_user_id}</h1>
              <h1>{state.flag && state.friends[0].second_user_id}</h1>
            </div>

            <div className="jobs_container">
              <h1>{state.flag && state.jobs[0].title}</h1>
              <h1>{state.flag && state.jobs[0].description}</h1>
              <h1>{state.flag && state.jobs[0].user_id}</h1>
              <h1>{state.flag && state.jobs[0].pay}</h1>
            </div>
          </div>
        </div>
        {/* REACT ROUTER LINK TO MESSAGES */}
        <Switch>
          <Route path="/messages" render={() => messages}></Route>
          <Route path="/portfolio/:id" children={<User />}></Route>
          <Route path="/art_showcase" render={() => artworks}></Route>
          <Route path="/job_board" render={() => jobBoard}></Route>
          <Route path="/jobs/:id" render={() => job}></Route>
        </Switch>
      </Router>
    </div>
  );
}
