var appMod = angular.module('myApp.directives');

appMod.directive('myGrid', function(){
   return {
      restrict: 'E',
      template: 
         '<div class="panel panel-default">' +
            '<div class="panel-heading">' + 
               '<h3 class="panel-title">' +
                  '{{ pane.title }}' + 
                  '</h3>' +
            '</div>' +
            '<div class="panel-body"> {{ pane.body }} </div>'+
         '</div>'
   };
});
