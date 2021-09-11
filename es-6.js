const numbers = [89,45,34,26,32];

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king Khan', 'Dhakar Mastan']
}

// 2. Template string
    const about = `my Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]} `

// arrow function
    const getFiftyFive = () => 55; // simple
    const addSixtyFive = number => number + 65 ; // one perameter
    const isEven = x => x%2 == 0 ; // (is even) 
    const addThree = (numbers1, numbers2, numbers3) => numbers1 + numbers2 + numbers3 ; // multy perameter function
    const doMath = (num1, num2) =>{
        const sum = num1 + num2 ;

        return sum;
    } 

// spread operator (...) 

    const newNumbers = [...numbers]; // we can separate an array with spread operator এখানে newNumber নতুন করে array  টাকে copy  রাখে ।

    numbers.push(99);
    console.log(newNumbers);

    // create a new array from an older array and add an element

        const currentNumber = [...numbers];
        currentNumber.push(98);

        console.log(currentNumber,numbers,newNumbers);