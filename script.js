  
function MilitaryResource(type, health, distance) {
    this.type = type;
    this.maxHealth = maxHealth = 100;
    this.health = health;
    this.maxDistance = maxDistance = 1000;
    this.distance = distance;
 }
 MilitaryResource.prototype.isReadyToMove = function() {
     return this.health > 0 && this.distance > 0 
 };
 MilitaryResource.prototype.isReadyToFight = function (){
     return this.health > 0;
 };
 MilitaryResource.prototype.restore = function (){
     return this.health < 25;
 };
 MilitaryResource.prototype.clone = function (){ 
     return new MilitaryResource(this.type, this.health, this.distance)
 } 


 function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
 }
 

 Squad.prototype.isReadyToMove = function() {
     return this.squad.some(function(a){
         return a.health > 0 && a.distance > 0
     })
 } ;
 Squad.prototype.isReadyToFight = function(){
     return this.squad.some(function(a){
         return a.health > 0
     })
 } ;
 Squad.prototype.restore = function(){
     return this.squad.some(function(a){
         return a.health < 25
     })
 };
Squad.prototype.cloneResource = function(){
    return new Squad(this.squad);
}
Squad.prototype.combineResources = function (resources){
    this.squad = resources.map(function(a){
       return Object.assign({}, a)
    });
}

var constructor = new MilitaryResource("Andruha", 50, 50)
var clone = constructor.clone()
constructor.type = "Garik";
var squad = new Squad([constructor, clone]);
console.log(squad)
console.log(squad.isReadyToMove());
console.log(squad.isReadyToFight());
console.log(squad.restore());
var squadClone = squad.cloneResource();
console.log(squadClone)


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
tree(10, '*'); 