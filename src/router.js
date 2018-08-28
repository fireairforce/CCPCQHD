import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from './routes/index'

function RouterConfig({ history,app }) {
  return (
    <Router history={history}>
      <Switch>
         <Route path="/" exact component={App} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
