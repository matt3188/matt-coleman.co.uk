import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from 'routes/Home';
import Cv from 'routes/Cv';
import NotFound from 'routes/NotFound';

const Container = ({ location }) => (
  <div className="container">
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
        <section className="route-section">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-cv" component={Cv} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

export default withRouter(Container);
