// Feed: feed view will show the movies in the form of the feed, also this view will create the new child scope from AppCtrl scope.
angular.module('showcasedMoviesApp')
.directive('showcasedMoviesAppFeedPage', function() {
	return {
		scope: true,
		restrict: 'E',
		templateUrl: 'app/feedPage/templates/feedPage.tpl.html',
		link: function(scope, element, attrs) {
			// Doing dom manipulation in link, for best approach.

			// on scroll bottom 10 more items will be append in dom depending upon the current length of the feed items 
			// and on scroll top default 10 feed items will be displayed.
			function onWindowScroll(event) {
				console.log("window scroll");

				var scrollAdjustOffset = 1;

				//scroll hit to bottom
				if (Math.ceil($(window).scrollTop()) + $(window).height() + scrollAdjustOffset >= $(document).height()) {
					if (scope.feedPageViewData.showFeedItemLimit + scope.feedPageViewData.showFeedItemDefaultLimit < scope.feedPageViewData.showcasedMoviesData.length) {
						scope.feedPageViewData.showFeedItemLimit += scope.feedPageViewData.showFeedItemDefaultLimit;
					}
					else {
						scope.feedPageViewData.showFeedItemLimit = scope.feedPageViewData.showcasedMoviesData.length;
					}
                } //scroll hit to top
                else if ($(window).scrollTop() == 0) {
                	scope.feedPageViewData.showFeedItemLimit = scope.feedPageViewData.showFeedItemDefaultLimit;
                }

                // calling the digest manually because scroll handler is executing out of the Angular context.
                if (!scope.$$phase) {
                	scope.$digest();
                }
			}

			var debouncedWindowScroll;

			// lazy loading of the feeditem, so in default only 10 feed items will be displayed.
			function listenForWindowScroll() {
				// debounced window scroll handler to optimize processing on user action.
				debouncedWindowScroll = _.debounce(onWindowScroll, 200);
				window.addEventListener('scroll', debouncedWindowScroll);
			}

			// preloading the image assets for the movies in advance.
			function preloadShowcasedMovieImages() {
				var showcasedMoviesData = scope.feedPageViewData.showcasedMoviesData;
				
				for (var movie = 0; movie < showcasedMoviesData.length; movie++) {
					var imgCardToPreload = new Image();
					imgCardToPreload.src = showcasedMoviesData[movie].cardImages[0].url;

					var imgCoverToPreload = new Image();
					imgCoverToPreload.src = showcasedMoviesData[movie].keyArtImages[0].url;
				}
			}

			function initializeLink() {
				listenForWindowScroll();
				preloadShowcasedMovieImages();
			}

			// on scope destroy unbinding the dom event listeners to avoid memory leaks.
			scope.$on('$destroy', function() {
				window.removeEventListener('scroll', debouncedWindowScroll);	
			});

			// initializing link.
			initializeLink();
		},
		controller: ['$scope', 'moviesDataProvider', function($scope, moviesDataProvider) {

			// feedPageViewData object attached to $scope for view.
			function populateFeedPageViewData() {
				$scope.feedPageViewData = {};
				$scope.feedPageViewData.showcasedMoviesData = moviesDataProvider.getShowcasedMoviesData();
 				$scope.feedPageViewData.showFeedItemDefaultLimit = 10;
				$scope.feedPageViewData.videoTrailerShowLimit = 1; 				
 				$scope.feedPageViewData.showFeedItemLimit = $scope.feedPageViewData.showFeedItemDefaultLimit;
			}

			// initializing controller.
			function initializeController() {
				populateFeedPageViewData();
			}

			initializeController();
		}]
	};
});