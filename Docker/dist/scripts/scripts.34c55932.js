"use strict";angular.module("clientApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/content",{templateUrl:"views/content.html",controller:"ContentCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("clientApp").factory("Extractor",["$http",function(a){var b="http://labouardy.com/parsing/extract.php";return{getContent:function(c){return a.post(b,{url:c})}}}]).factory("Content",function(){return{}}),angular.module("clientApp").controller("MainCtrl",["$scope","$location","Extractor","Content",function(a,b,c,d){a.getContent=function(e){c.getContent(a.url).success(function(c){a.content=d,a.content.data=c,b.path("/content")})}}]),angular.module("clientApp").controller("ContentCtrl",["$scope","Content",function(a,b){document.getElementById("code").value=b.data;var c=document.getElementById("code"),d={lineNumbers:!0,mode:"html"};CodeMirror.fromTextArea(c,d)}]),angular.module("clientApp").run(["$templateCache",function(a){a.put("views/content.html",'<div class="container-fluid padding-container"> <ol class="breadcrumb"> <li><a href="#/">Home</a></li> <li class="active">Content</li> </ol> <textarea id="code" cols="120" ng-model="code"></textarea> </div>'),a.put("views/main.html",'<div class="container padding-container"><div class="row"> <div class="col-md-12"> <form> <div class="form-group"> <label>URL:</label> <input type="text" class="form-control" placeholder="Website URL" ng-model="url"> </div> <input type="submit" value="Get" class="btn btn-success btn-block" ng-click="getContent(url)"> </form> </div> </div> </div>')}]);