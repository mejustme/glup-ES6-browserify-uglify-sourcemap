/**
 * Created by lianxu-admin on 2015/12/20.
 */
import {Person} from './module/Person-es6.js';

var obj = {
    name: 'cqh',
    age: 24
};

var person = new Person(obj);

console.log(person.getName());
console.log(person.getAge());