const React = require('react');
const {DefaultRoute, Route, NotFoundRoute, Redirect} = requier('react-router');
const Home = require('./components/Home');
const About = require('./components/about/About');
const Author = require('./components/authors/Author');
const NewAuthor = require('./components/authors/NewAuthor');
const NotFound = require('./components/errors/404')

const routes = (
    <Route name="app" path="/">
        <DefaultRoute handler={Home}/>
        <Route name="about" path="about" handler={About} />
        <Route name="authors" path="authors" handler={Author} />
        <Route name="new-author" path="new-authors" handler={Author} handler={NewAuthor} />
        <NotFoundRoute handler={NotFound} />
        <Redirect from="about-us" to="about" />
    </Route>
);

module.exports = routes;