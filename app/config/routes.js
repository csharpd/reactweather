var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');
var HomeContainer = require('../containers/HomeContainer')

// define a route inside of the router with a path and a component property.
// the Main component will always be active i.e like a consistant header/footer that is present universally.
// home is a child route of main. 
// it becomes active when /home.
// <Route path='/home' component={Home}>
// <IndexRoute> would define the default route if no other /xyz are active
// History is the default react router history.
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);

module.exports = routes;