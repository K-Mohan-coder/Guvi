const fruits=['apple','banana', 'Orange', 'Mango']

console.log(fruits.length);//length property

//Reading a array

fruits.forEach(fruit => console.log(fruit));

//Adding Data in array
fruits.push('grapes')
console.log("Adding Data in array",fruits);

//to add a data in top of a array
fruits.unshift('Dragon Fruit')
console.log("to add a data in top of a array",fruits);

//remove last element of the array
fruits.pop()
console.log("remove last element of the array",fruits);

//remove the first element in the array
fruits.shift()
console.log("remove the first element in the array",fruits);

// slice

const slicedFruits=fruits.slice(1,3)
console.log("After slicing with index",slicedFruits);

//splice
fruits.splice(1,2)//second parameter is the count of element to delete
console.log("After splicing with index",fruits);

// concat of array

// type-1
const breakfast =['idly', 'Dosa', 'Poori']
const lunch =['Chicken Biriyani', 'Coffee']
const dinner = ['Chicken Fried Rice', 'Milk']
const overallFood=breakfast.concat(lunch, dinner, 'chips')

// type-2 spread operator
const overallFoodSpreadOperator = [...breakfast, ... lunch, ...dinner, "Juice"]


//type-3
const newFoodArr = []
newFoodArr.push(...breakfast, ... lunch, ... dinner, 'Apple juice')
console.log("type-1:"+overallFood, "type-2:"+overallFoodSpreadOperator,"type-3:"+newFoodArr)

// Objects in array
const users = [{id:1,name:"Mohan",status:true},{id:2,name:"Surya",status:true}]

users.forEach(user => console.log(user.status))