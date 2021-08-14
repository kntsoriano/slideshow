import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css'
import Song from './Song';
import Chat from './Chat';
import AdminPage from './AdminPage';
import Video from './Video';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/song">
            <div className="md:flex">
              <Song />
              <Chat showAudio />
            </div>
          </Route>
          <Route path="/">
            <div className="md:flex">
              <Video src="https://www.youtube.com/embed/n9Rq1BGZHbM" />
              <Chat showAudio={false} />
            </div>
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
