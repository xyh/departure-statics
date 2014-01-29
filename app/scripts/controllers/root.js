/**
 * Created by xuyuhang on 1/28/14.
 */

'use strict';

angular.module('departureStaticsApp').run(function ($rootScope) {

  $rootScope.safeApply = function(fn) {
    var phase = this.$root.$$phase;
    if(phase == '$apply' || phase == '$digest') {
      if(fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };
});
