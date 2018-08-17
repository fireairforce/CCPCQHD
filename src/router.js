import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import Appbottom from './routes/Appbottom/Appbottom';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Appbottom} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
