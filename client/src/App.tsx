import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css'
import SongPage from './SongPage';
import AdminPage from './AdminPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <SongPage />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
