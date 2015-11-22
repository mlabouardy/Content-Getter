

angular.module('clientApp')
  .factory('Extractor',function($http){
  	var baseUrl="http://labouardy.com/parsing/extract.php";

  	return{
  		getContent:function(page){
  			return $http.post(baseUrl,{url:page});
  		}
  	}
  })
  .factory('Content',function(){
  		return{};
  });
