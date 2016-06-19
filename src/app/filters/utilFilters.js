// apps util filters used for the view data displayed to user in feed page.
angular.module('showcasedMoviesApp').
filter('checkIfValueExists', [function() {
    return function(feedItemValue) {
    	return feedItemValue ? (feedItemValue.length === 0 ? 'N/A' : feedItemValue) : 'N/A';
    };
}]).
filter('generateVideoLinkWithQuality', ['$sce', function($sce) {
    return function(url, quality) {
    	var link;
    	switch(quality) {
    		case 'Low':
    		  link = '<a href="'+ url +'" target="_blank">Low quality</a>';
    		break;
    		case 'Medium':
    		  link = '<a href="'+ url +'" target="_blank">Medium quality</a>';
    		break;
    		case 'High':
    		  link = '<a href="'+ url +'" target="_blank">High quality</a>';
    		break;
    	}
    	return $sce.trustAsHtml(link);
    };
}]);