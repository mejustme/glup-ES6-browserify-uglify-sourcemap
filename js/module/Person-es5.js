/**
* Created by lianxu-admin on 2015/12/20.
*/
function Person(obj){
    this.name = obj.name;
    this.age = obj.age;
};

Person.prototype.getName = function(){
    return preFix(this.name,"name");
}

Person.prototype.getAge = function(){
    return preFix(this.age,"age");
}

function preFix(arg1, arg2){
    return "es5: " + arg2 + " is " + arg1;
}

module.exports = Person;
