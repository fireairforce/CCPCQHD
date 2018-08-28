import React from 'react';
<<<<<<< HEAD
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
  return (
    <Router history={history}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/login"  component={Login} />
                <Route path='/manage' component={Manage} />
            </Switch>
        </Router>
  


=======
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import App from './routes/index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
>>>>>>> 4d6609c2a0dff093d71840b24fe034a62120662e
  );
}

export default RouterConfig;
