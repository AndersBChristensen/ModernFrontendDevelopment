angular.module('MyShop', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(false);
		$routeProvider
			.when('/', function () {
				console.log('root!');
			})
			.otherwise(function () {
				console.log('otherwise!');
			});
	})
	.controller('ShopController', function ($scope, $route) {
		console.log($route);
		$scope.products = [{id: 1, name: "Samsung 16gb micro sd", price: 350, image: "http://www.samsung.com/dk/consumer/mobile-devices/smartphones/galaxy-s/galaxy-s7/images/galaxy-s7-edge_gallery_front_white_s3.png"}, {id: 2, name: "Dress", price: 350, image: "http://images.nyandcompany.com/is/image/NewYorkCompany/productlist2/Draped-Wrap-Dress-Petite_06359490_558.jpg"}, {id: 3, name: "Dog", price: 350, image: "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-maxi-landing-hero.ashx"}, {id: 4, name: "Tower", price: 350, image: "https://static.dezeen.com/uploads/2014/02/Ribbon-like-design-wins-competition-for-a-broadcast-tower-and-visitor-centre-in-Turkey-_dezeen_1sq.jpg"}, {id: 5, name: "Can", price: 350, image: "http://www.bangkokpost.com/photos_content/large/1/0305/12305-1292956293xyn63jzdry.jpg"}, {id: 6, name: "beer", price: 350, image: "http://www.bravosolutions.com/img13/beer.gif"}];
		$scope.basket = [];
		$scope.productCount = $scope.products.length;
		$scope.purchase = function (id) {
			$scope.basket.push(id);
		};

	});

