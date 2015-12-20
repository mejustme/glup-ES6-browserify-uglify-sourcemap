/**
* Created by lianxu-admin on 2015/12/20.
*/
function Person(obj){
    this.name = obj.name;
    this.age = obj.age;
};

Person.prototype.getName = function(){
    return preFix(this.name);
}

Person.prototype.getAge = function(){
    return preFix(this.age);
}

function preFix(str){
    return "output is:" + str;
}

module.exports = Person;
