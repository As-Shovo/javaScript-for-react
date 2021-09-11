// 1. array destructuring

const numbers = [42,23];
    //simpal way and old version
    const x = numbers[0];
    const y = numbers[1];

    // new version of destructring
    const [a,b] = [32,31];
    const [c,d] = numbers;

    function boxify (num1 , num2){
        const nums = [num1 , num2];
        return nums;
    }

    const [first,second] =[90.34]; // same 
    const [first1,second1] =boxify(90,35); // ^ same

    console.log(x,y,a,b,c,d);
    console.log(boxify(90,35));


    const student = {
        name: 'Sakib Khan',
        age: 32,
        movies: ['king Khan', 'Dhakar Mastan']
    }
    const [firstMovie,secondMovie] = student.movies;
    console.log(firstMovie,secondMovie);


// Object destructuring
const {name,age} = {name: 'alu',age:14}; //simple
const {name1,age1, id} = {id:12, name: 'alu',salery: 34000,age:14};

const employee = {
    ide: 'vsCode',
    designation: 'developer',
    machine: 'mac',
    languages: ['html','css','js'],
    specification:{
        height:66,
        weight:67,
        address: 'kumarkhali',
        drink: 'water',
        watch:{
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
    

}


const {machine, ide} = employee;

const {weight,address} = employee.specification;
const [css,javascript] = employee.languages;

const {brand} = employee?.specification?.watch

console.log(machine,ide,weight,address,css,javascript,brand);

