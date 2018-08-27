import React from 'react';
import dynamic from 'dva/dynamic'
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';


function RouterConfig({ history,app }) {
  const App = dynamic({
    app,
    component: () => import('./routes/index')
  })
  const Login = dynamic({
    app,
    component: () => import('./routes/Login/Login')
  })
  return (
    <Router history={history}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </Router>


  );
}

export default RouterConfig;
