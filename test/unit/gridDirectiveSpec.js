'use strict'

describe('testing custom grid', function(){
   var element, scope;
   beforeEach(module('myApp.directives'));
   
   beforeEach(inject(function($compile,$rootScope){
      var linkingFn = $compile('<my-grid></my-grid>');
      scope = $rootScope;
      element = linkingFn(scope);
   }));
   
   it('has some properties', function(){
      
      expect(element.html()).toContain('My Grid');
      
   });
   
});