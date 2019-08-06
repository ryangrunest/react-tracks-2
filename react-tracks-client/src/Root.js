import React from "react";
import withRoot from "./withRoot";
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost'

import App from './pages/App';
import Profile from './pages/Profile';
import Header from './components/Shared/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Root = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading</div>
      if (error) return <div>Error</div>

      return (
        <Router>
          <>
          <Header/>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/profile/:id" component={Profile}/>
          </Switch>
          </>
        </Router>
      )
    }}
  </Query>
)
;

const ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }  
`
// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
