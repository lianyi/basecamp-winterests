'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './mywins.routes';

export class MywinsComponent {
  $http;
  socket;
  $state;
  Auth;
  getCurrentUserSync;
  data = [];
  newThing;

  /*@ngInject*/
  constructor($http, $scope, socket, $state, Auth) {
    this.$http = $http;
    this.socket = socket;
    this.Auth = Auth;
    this.$state = $state;
    this.getCurrentUserSync = Auth.getCurrentUserSync;

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  }


  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.data = response.data;
      this.socket.syncUpdates('thing', this.data);
    });
  }
  Add() {
    if (this.newThing) {
      this.$http.post('/api/things', this.newThing);
      this.newThing = {};
    }
  }

  Delete(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

export default angular.module('basecampWinterestsApp.mywins', [uiRouter])
  .config(routes)
  .component('mywins', {
    template: require('./mywins.html'),
    controller: MywinsComponent,
    controllerAs: '$ctrl'
  })
  .name;
