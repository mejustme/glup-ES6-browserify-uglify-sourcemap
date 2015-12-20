class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
    }
    getName(){
        return preFix(this.name,"name");
    }
    getAge(){
        return preFix(this.age,"age");
    }
}

var preFix = (arg1,arg2) => {
     return arg2 + "is" + arg1;
}

export {Person}