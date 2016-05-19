function ShopController($scope, $route, Products, Basket) {
	console.log($route);
	$scope.products = Products;
	Basket.subscribe(function (updatedBasket) {
		$scope.basket = updatedBasket;
	})
	$scope.productCount = $scope.products.length;
	$scope.purchase = function (id) {
		$scope.basket.push(id);
		Basket.update($scope.basket);
	};

}

angular.module('MyShop', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(false);
		$routeProvider
			.when('/', {
				controller: ShopController, templateUrl: '/mainContent.html'
			})
			.when('/product/:id', {
				controller: function ProductController($scope, $routeParams, Products, Basket) {
					//this.product = Products.findById($routeParams.id);
					Basket.subscribe(function (updatedBasket) {
		$scope.basket = updatedBasket;
		$scope.basketCount = $scope.basket.length;
	})

					var productId = parseInt($routeParams.id)
					this.productId = $routeParams.id;
					this.product = Products.find(function(product){
						return (product.id === productId);
					});
					$scope.purchase = function (id) {
					$scope.basket.push(id);
						Basket.update($scope.basket);
					}; 
				},
				controllerAs: 'productController',
				templateUrl: '/product.html'
				// Expression, fx. ng-bind="productController.product"
			})
			.otherwise(function () {
				console.log('otherwise!');
			});
	})
	.controller('BasketController', function($scope, Products, Basket){
		
	Basket.subscribe(function (updatedBasket) {
		$scope.basket = updatedBasket;
		$scope.basketCount = $scope.basket.length;
	})
	
	$scope.purchase = function (id) {
		$scope.basket.push(id);
		Basket.update($scope.basket);
	};
	})
	.controller('ModalBasket', function($scope, Products, Basket){
		
	Basket.subscribe(function (updatedBasket) {
		$scope.basket = updatedBasket;
		$scope.basketCount = $scope.basket.length;
	})
	
	$scope.purchase = function (id) {
		$scope.basket.push(id);
		Basket.update($scope.basket);
	};
	})
	.factory('Products', function () {
		return [{id: 1, name: "Samsung 16gb", price: 350, image: "http://www.samsung.com/dk/consumer/mobile-devices/smartphones/galaxy-s/galaxy-s7/images/galaxy-s7-edge_gallery_front_white_s3.png"}, {id: 2, name: "Dress", price: 350, image: "http://images.nyandcompany.com/is/image/NewYorkCompany/productlist2/Draped-Wrap-Dress-Petite_06359490_558.jpg"}, {id: 3, name: "Dog", price: 350, image: "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-maxi-landing-hero.ashx"}, {id: 4, name: "Tower", price: 350, image: "https://static.dezeen.com/uploads/2014/02/Ribbon-like-design-wins-competition-for-a-broadcast-tower-and-visitor-centre-in-Turkey-_dezeen_1sq.jpg"}, {id: 5, name: "Can", price: 350, image: "http://www.bangkokpost.com/photos_content/large/1/0305/12305-1292956293xyn63jzdry.jpg"}, {id: 6, name: "beer", price: 350, image: "http://www.bravosolutions.com/img13/beer.gif"}];
	})
	.factory('Basket', function () {
		var basket = [];
		var subscribers = [];

		function notify() {
			subscribers.forEach(function (subscriber) {
				subscriber(basket);
			})
		}

		return {
			subscribe: function (subscriber) {
				subscribers.push(subscriber);
				subscriber(basket);
			},
			update: function (newBasket) {
				basket = newBasket;
				notify();
			}
		};
	});
	


