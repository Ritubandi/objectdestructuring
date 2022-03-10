/////// object Destructuring ///////

let options ={
    name: "ritu",
    salary: "undefined",
    pincode: 20005,
    city: "indore",
    state: "null",
};

//old way to present//
let name = options.name;
let salary = options.salary;
let pincode = options.pincode;
let city = options.city;
let state = options.state;

//output//
/*
name
'ritu'

state
'null'
*/

//New way in ES6 to represent properties//

//  syntax of object destructuring = it will reduce the  line of code and make a clean code for developers// 
let {name, salary, pincode, city, state} = options;

/*Output: 
let {name, salary, pincode, city,state} = options;
undefined

name
'ritu'
*/
////////////// Default value  ///////////////
 
let obj1 = {
    cityName:city,
    directorName:undefined,
    movieName:"NA"
    //default value only work when we have undefined key value//
} ;

let {cityName="indore", directorName="vishnu", movieName="Zero"} = obj1;

//Output//
/*
cityName
'indore'

directorName
'vishnu'

movieName
'NA'

*/

////////////// rest operator /////////////////

 //Note:-  (...rest) = rest operator create the array of remaining properties//

let {name, ...rest} =options;

//ouptut//

/*
rest
{salary: 'undefined', pincode: 20005, city: 'indore', state: 'null'}
*/

/////////////////////////  Aliasing  /////////////////////////////////////

// if our object name is same as our key value -> its known as "Aliasing" //

const time = {
    time: '1s',
    date: '15.12.2022',
    name: 'abhi',
    place: 'paris'
};
let { time:_time, ...show}= time;
 //so we need to use new variable time:_time//
 
///// output //////
/*
time -> name of object
{time: '1s', date: '15.12.2022', name: 'abhi', place: 'paris'}

_time -> new key which have a value of time key
'1s'

show -> rest operator 
{date: '15.12.2022', name: 'abhi', place: 'paris'}
*/

let {date, ...restAgain} = time;

// output //
/*
let {date, ...restAgain} = time;
undefined

time
{time: '1s', date: '15.12.2022', name: 'abhi', place: 'paris'}

restAgain
{time: '1s', name: 'abhi', place: 'paris'}
*/

let {date, ...restAgain} = rest;

//output//
/*
restAgain
{salary: 'undefined', pincode: 20005, city: 'indore', state: 'null'}
rest
{salary: 'undefined', pincode: 20005, city: 'indore', state: 'null'}
*/

///////////////////////// Working of same key ///////////////////////////////////

// what happened when we mention same key repeatedly by giving different values every time //
 const obj = {
    profile:"rockid",
    city: "indore",
    city: "delhi",
    city:"dehradun", // updated city is dehradun that's why it will print in the output//
    work:"software engineer"
     
 };

 console.log(obj);


 //output//
 /*
 obj
{profile: 'rockid', city: 'dehradun', work: 'software engineer'}
*/

//////////////////Shorthand Syntax/////////////////////

const cont= {
    city:city,
    series: series
};

/* when our key and variable name is same we can use shothand syntax */
 const _cont ={
     city,
     series
 }

