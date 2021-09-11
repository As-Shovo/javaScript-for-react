// 1 . How to declare a variable using let and const

    const fatherName = 'Aziz'; // we can't change
    let season = 'rainy';
    season = 'winter'; // we can change 

// 2. 6 besic conditions : >, <, ===, !==, <=, >= 

// multiple conditions && , || 

    if(fatherName === 'aziz' || season === 'rainy'){ // যদি বাবার নাম আজিজ হয় অথবা সেযন রেইন্নি হয় (এখানে একটা সত্যি হলেই হবে)
        // kisu ekta koro
    }
    else if(fatherName === 'Aziz' && season === 'winter'){ // যদি বাবার নাম আজিজ হয় এবং সেযন winter হয় (এখানে দুই তাই সত্তি হতে হবে)
        // kisu ekta koro
    }

    else{ // conditions সত্যি না হলে এইটা হবে     
            // kisu ekta koro
    }

// 3. how to declare and array (length, index, indexOf, )

    const myArray = ['akbar','dhaka','kamrangir char', 'bangladesh']

    myArray[1] = 'shuvo';
    myArray.push('as');
    myArray.pop();
    const arr = myArray.indexOf('shuvo');
    const arrInclud = myArray.includes('bangladesh');

    console.log(myArray);
    console.log(myArray.length);
    console.log(arr);
    console.log(arrInclud);

// 4. how to work loop ( for loop while loop )

    // While Loop  
    let i = 0
    while (i < 10) {
        console.log(i);
        i++;
    }

    // for Loop

    for(let i = 0; i <=10; i++){
        console.log(i);
    }

// ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। 

        // simple function 
        function add (num1, num2){
            const result = num1 + num2;
            return result;
        }

        const output = add(12,32) // call function

        // arrow function 

        const add2 = (num1,num2) => {const result = num1 + num2; return result};
        const output2 = add(12,32) // call function


// ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়। 

    const student = {
        name: 'Sakib Khan',
        age: 32,
        movies: ['king Khan', 'Dhakar Mastan']
    }

    const myVariable = 'age';

    console.log(student.age); //direct by property
    console.log(student['age']);  // access via property name string
    console.log(student[myVariable]); // access via property name in a variable




