/**
 * Created by lianxu-admin on 2015/12/20.
 */
var Person = require('./module/Person-common');

var obj = {
    name: 'cqh',
    age: 24
};

var person = new Person(obj);

console.log(person.getName());
console.log(person.getAge());