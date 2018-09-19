import React from 'react';
import dynamic from 'dva/dynamic'

import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';

function RouterConfig({ history,app }) {
  const AppOne = dynamic({
    app,
    component: () => import('./routes')
  })
  const Login =dynamic({
   app,
   component:() => import ('./routes/Login/Login')
  })
  const Manage = dynamic({
    app,
    component:()=> import ('./routes/manage')
  })
  const SecondPage=dynamic({
    app,
    component:()=> import ('./routes/SecondPage/index')
  })
  const SecondPageDetail= dynamic({
    app,
    component:()=>import ('./routes/SecondPageDetail/index')
  })
  return (
    <Router history={history}>
            <Switch>
                <Route path="/" exact component={AppOne} />
                <Route path="/login"  component={Login} />
                <Route path='/manage' component={Manage} />
                <Route path='/game' component={SecondPage} />
                <Route path='/detail/:id/:type' component={SecondPageDetail} />
               
            </Switch>
        </Router>
  );
}

export default RouterConfig;
