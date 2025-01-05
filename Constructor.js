// Q1: Using the variable personsCreate a function called firstName that accept an object
// and return all the first name of the person insides
// Example: firstName(persons) =&gt; 
// [&#39;John&#39;, &#39;Alex&#39;, &#39;Alice&#39;, &#39;Thor&#39;, &#39;Soso&#39;]

//q1
const persons = [
    { firstName: 'John', lastName: 'Doe'},
    { firstName: 'Alex', lastName: 'Smith'},
    { firstName: 'Alice', lastName: 'Johnson'},
    { firstName: 'Thor', lastName: 'Odinson'},
    { firstName: 'Soso', lastName: 'Lee'},
];

function firstName(persons) {
    const firstNames = [];
    persons.forEach(person => {
        firstNames.push(person.firstName);
    });
    return firstNames;
}

const result = firstName(persons);
console.log(result);






// Q2:Create a function called objectToArray that accept an object and return an array of
// the keys and values in this object
// Example: objectToArray({firstName:&quot;Moh&quot;,age:24})
// =&gt; [&quot;firstName&quot;,&quot;Moh&quot;,&quot;age&quot;,24]

//q2
const obj = {
    name: "Abdullah",
    age: 26,
    city: "Zarqa"
};

function printKeyAndValue(obj) {
    const result = [];
    const keys = Object.keys(obj);

    keys.forEach(key => {
        result.push(key, obj[key]);
    });

    return result;
}

const resultobj = printKeyAndValue(obj);
console.log(resultobj);






// Q:31. Create a constructor function called Car that accepts the following parameters:
// o brand (string)
// o model (string)
// o year (number)
// 2. Inside the constructor, define a method called getDetails that returns a string in
// the following format:

// &quot;Brand: [brand], Model: [model], Year: [year]&quot;
// 3. Create three instances of the Car object with different values for brand, model,
// and year.
// 4. Store these instances in an array and loop through the array to print the details of
// each car using the getDetails method.

//q3
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.Details = function () {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
}

const car1 = new Car("renolt", "clio", 2003);
const car2 = new Car("Honday", "ionic", 2015);
const car3 = new Car("nessan", "sune", 2012);


const cars = [car1, car2, car3];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].Details());
}