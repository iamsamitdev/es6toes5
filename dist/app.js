"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Food = function () {
	function Food(name, protein, carbs, fat) {
		_classCallCheck(this, Food);

		this.name = name;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}

	_createClass(Food, [{
		key: "tostring",
		value: function tostring() {
			return "Your name is " + this.name + " and protein is " + this.protein + " and carbs is " + this.carbs + " and fat is " + this.fat;
		}
	}, {
		key: "print",
		value: function print() {
			console.log(this.tostring());
		}
	}]);

	return Food;
}();

// Create instant


var obj = new Food('Samit', 20, 5, 30.5);
obj.print();