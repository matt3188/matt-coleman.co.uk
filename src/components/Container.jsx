import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '../components/Home';

const Container = ({ location }) => {
  return (
    <div className="container">
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(Container);
