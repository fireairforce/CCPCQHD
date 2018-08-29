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
  const Manage =dynamic({
    app,
    component:()=>import('./routes/manage/index')
  })
  const News =dynamic({
    app,
    component:()=>import('./routes/NewsSecond/NewsSecond')
  })
  const Focus=dynamic({
    app,
    component:()=>import('./routes/FocusSecond/FocusSecond')
  })
  return (
    <Router history={history}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/login"  component={Login} />
                <Route path='/manage' component={Manage} />
                <Route path="/news" component={News} />
                <Route path="/focus" component={Focus} />
            </Switch>
        </Router>
  );
}

export default RouterConfig;
