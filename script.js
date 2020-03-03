function tree(floors, symbol) {
    var arr = Array(floors).fill(" ");
    arr[floors - 1] = symbol;
    console.log(arr.join(""));
     for(var i = 2; i <= floors; i++){
            arr[arr.length] = symbol;
            arr[floors - i] = symbol;
            console.log(arr.join(""));
     }
}
tree(4, '*');    






// var obj = {
//     name: "MyFutureObject",
//     age: 24,
//     sex: "male",
//     getAge: function(){
//         return this.age;
//     },
//     incAge: function(){
//         return this.age++;
//     }
// };

// function User(name, age, exp, sex){
//     this.exp = exp;
//     this.name = name;
//     this.age = age;
//     this.sex = sex === undefined ? "female" : "male";
//     this.salary = 500;
// }

// User.prototype.getAge = function(){
//     return this.age;
// }

// User.prototype.incAge = function(){
//     return this.age++;
// }

// User.prototype.incSalary = function(bonusesAmount){
//     var bonuses = Number(bonusesAmount) || 0;
//     return (this.salary += 500 + bonuses + (this.exp / 100) * bonuses);
// }

// var usersArray = [];

// for(var i = 0; i < 5; i++ ){
//     usersArray.push(new User("User " + i, 20 + i, i + 1));
// }

// for( var i = 0; i < usersArray.length; i++){
//     usersArray[i].incAge();
//     usersArray[i].incSalary(200);
// }

// console.log(usersArray);


