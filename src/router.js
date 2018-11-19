import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Home';
import Detail from './routes/Detail';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
