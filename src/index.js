import React from 'react';
import ReactDOM from 'react-dom';
import UploadComponent from './components/upload';
import DisplayComponent from './components/display';
import CallbackComponent from './components/callback';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/authService';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={DisplayComponent}/>
        <Route path="/upload" component={UploadComponent} onEnter={requireAuth} />
        <Route path="/callback" component={CallbackComponent} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();