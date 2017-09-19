"use strict"

class Food{
	constructor(name,protein,carbs,fat)
	{
		this.name = name
		this.protein = protein
		this.carbs = carbs
		this.fat = fat
	}

	tostring(){
		return `Your name is ${this.name} and protein is ${this.protein} and carbs is ${this.carbs} and fat is ${this.fat}`
	}

	print(){
		console.log(this.tostring())
	}
}

// Create instant
const  obj = new Food('Samit',20,5,30.5)
obj.print();
