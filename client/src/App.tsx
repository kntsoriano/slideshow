import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css'
import Cartfilling from './Cartfilling';
import Chat from './slideshow/Chat';
import AdminPage from './AdminPage';
import Video from './Video';
import Landing from './Landing';
import Slideshow from './Slideshow';

const queryClient = new QueryClient();

// TODO replace with env var to use as a feature flag without having to rebuild.
const redirectToLandingPage = false;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/live">
            <Slideshow />
          </Route>
          <Route path="/cartfilling">
            <Cartfilling />
          </Route>
          <Route path="/soon">
            <Landing />
          </Route>
          <Route path="/dj">
            <div className="md:flex">
              <Video src="https://www.youtube.com/embed/AOKFeTPHomk" />
              <Chat showAudio={false} />
            </div>
          </Route>
          <Route path="/"
            render={() => {
              return redirectToLandingPage ?  <Redirect to="/soon" /> : <Redirect to="/cartfilling" /> }}
            >
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
