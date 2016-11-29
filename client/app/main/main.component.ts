const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routing from './main.routes';

export class MainController {
  $http;
  socket;
  $state;
  Auth;
  getCurrentUserSync;
  data = [];

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

  amIVoted(thing) {
    let userid = this.getCurrentUserSync()._id;
    let voted = false;
    if (userid && thing.visitors) {
      const idx = thing.visitors.indexOf(userid);
      voted = (idx !== -1);
    }
    return voted;
  }

  changeVote(bar) {
    const userid = this.getCurrentUserSync()._id;
    if (userid) {

      var idx = bar.visitors.indexOf(userid);
      if (idx !== -1) {
        bar.visitors.splice(idx, 1);
      } else {
        bar.visitors.push(userid);
      }
      bar.visitorsCount = bar.visitors.length;
      this.$http.put('/api/things/' + bar._id, bar).then(response => {
        //console.info(response);
      });
    } else {
      this.$state.go('login');

    }
  }
}

export default angular.module('winterestsApp.main', [
  uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
