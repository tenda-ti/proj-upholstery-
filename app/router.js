import EmberRouter from '@ember/routing/router';
import config from 'upholstery/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('contact');
  this.route('gallery');
});
