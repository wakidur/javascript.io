// 1 Day 0: Hello, World.
exports.processData = (inputString) => {
    // This line of code prints the first line of output
    console.log("Hello, World.");

    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
};

// 2 Day 1: Data Types

exports.dataTypes = (integer, double, String) => {
    const i = 4;
    const d = 4.0;
    const s = "HackerRank ";
    // Declare second integer, double, and String variables.
    const secondInteger = 4;
    const secondDouble = 4.0;
    const secondString = "is the best place to learn and practice coding!";
    // Read and save an integer, double, and String to your variables.
    // secondInteger = parseInt(readLine())
    // secondDouble = parseFloat(readLine())
    // secondString = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(parseInt(i + parseInt(secondInteger, 10), 10));

    // Print the sum of the double variables on a new line.
    console.log(parseFloat(d + parseFloat(secondDouble)).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
};

/**
 * 3 Day 2: Operators
 * Complete the solve function below.
 * @param {*} meal_cost
 * @param {*} tip_percent
 * @param {*} tax_percent
 * solve(meal_cost, tip_percent, tax_percent);
 * solve(12.10, 20, 8);
 */


exports.solve = (meal_cost, tip_percent, tax_percent) => {
    let totalCost = 0;
    let tip = 0;
    let tax = 0;
    tip = (parseFloat(meal_cost) * (tip_percent / 100)).toFixed(2);
    tax = (parseFloat(meal_cost) * (tax_percent / 100)).toFixed(2);
    totalCost = parseFloat(meal_cost) + parseFloat(tip) + parseFloat(tax);
    console.log(Math.round(totalCost));
};


/**
 * 4 Day 3: Intro to Conditional Statements
 *
 */
exports.introToConditionalStatements = (N) => {
    console.log(N);
    if (N % 2 !== 0) console.log("Weird");
    if (N % 2 === 0) {
        if (N >= 2 && N < 6) console.log("Not Weird");
        if (N >= 6 && N <= 20) console.log("Weird");
        if (N > 20) console.log("Not Weird");
    }
};

/**
 * 5 Day 4: Class vs. Instance
 */
/*
class Person {
    constructor(initialAge) {
        if (initialAge <= 0) {
            this.age = 0;
            console.log("Age is not valid, setting age to 0.");
        } else this.age = initialAge;
    }

    amIOld() {
        // Do some computations in here and print out the correct statement to the console
        if (this.age < 13) console.log("You are young.");
        else if (this.age >= 13 && this.age < 18) console.log("You are a teenager.");
        else console.log("You are old.");
    }

    yearPasses() {
        // Increment the age of the person in here
        this.age += 1;
    }
}

const personAge = new Person(14);
*/
// console.log(personAge);

/**
 * 6 Day 5: Loops
 * Task
 * Given an integer, n, print its first 10  multiples.
 * Each multiple n * i  (where 1 <= i <= 10 ) should be printed on a new line in the form: n x i = result.
 *
 * loopsFirstTenMultiples(2)
 */

exports.loopsFirstTenMultiples = (n) => {
    for (let i = 1; i <= 10; i += 1) {
        console.log(`${n} x ${i} = ${parseInt(n * i, 10)}`);
    }
};


/**
 * 7 Day 6: Let's Review
 * Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).
 */

exports.processDataStringEventAndOdd = (inputs) => {
    const input = "2\nHacker\nRank";
    console.log(input.split("\n"));
    console.log(input.split("\n").slice(1));

    let inputCopy = input.split("\n").slice(1);


    // Enter your code here
    inputCopy = input.split("\n").slice(1);
    // eslint-disable-next-line no-unused-vars
    for (const s of inputCopy) {
        let evenIndexed = "";
        let oddIndexed = "";
        for (let j = 0; j < s.length; j += 1) {
            if (j % 2 === 0) evenIndexed += s[j];
            else oddIndexed += s[j];
        }
        // console.log(`${evenIndexed} ${oddIndexed}`);
        return `${evenIndexed} ${oddIndexed}`;
    }
};

/**
 * 8 Day 7: Arrays
 */

exports.arraysReverse = () => {
    let result = "";
    const n = 4;

    const arr = [1, 4, 3, 2];
    for (let i = n - 1; i >= 0; i -= 1) {
        result += `${arr[i]} `;
    }
    console.log(result);
};

/**
 * 9 Day 8: Dictionaries and Maps
 */

exports.dictionariesAndMaps = () => {
    // Enter your code here
    // input = input.trim().split("\n");

    const phoneBook = {};
    const input = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";
    const numberOfEntries = parseInt(input.split("\n")[0], 10);
    const entries = (input.trim().split("\n")).slice(1, numberOfEntries + 1);
    const searchEntries = (input.trim().split("\n")).slice(numberOfEntries + 1);
    console.log(numberOfEntries);
    console.log(entries);
    console.log(searchEntries);

    for (const item of entries) {
        const [i, j] = item.split(" ");
        console.log(i, j);
        phoneBook[i] = j;
    }

    for (const key in searchEntries) {
        if (Object.prototype.hasOwnProperty.call(phoneBook, searchEntries[key])) {
            console.log(`${searchEntries[key]}=${phoneBook[searchEntries[key]]}`);
        } else console.log("Not found");
    }
};
/**
 * 9 Day 9: Recursion 3
 */
exports.factorial = () => {
    // Enter your code here
    // input = input.trim().split("\n");
    function factorial(n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
};


/**
 * Day 10: Binary Numbers
 */
exports.binaryNumbers = () => {
    const n = parseInt(13, 10);
    const num = n.toString(2);
    let max = 0;
    let counter = 0;
    for (let i = 0; i < num.length; i += 1) {
        if (parseInt(num[i], 10) === 1) {
            counter += 1;
            if (counter > max) {
                max = counter;
            }
        } else {
            counter = 0;
        }
    }
    console.log(max);
    this.TwoDArrays();
};
/**
 * Day 11: 2D Arrays
 */
exports.TwoDArrays = () => {
    function main() {
        const arr = Array(6);
        const hourglass = Array(16);
        for (let i = 0; i < 6; i += 1) {
            arr[i] = readLine().split(" ").map((arrTemp) => parseInt(arrTemp, 10));
        }
        let k = 0;
        for (let i = 0; i < 4; i += 1) {
            for (let j = 0; j < 4; j += 1) {
                const tempArr = [];
                for (let m = j; m < j + 3; m += 1) {
                    tempArr.push(arr[i][m]);
                    tempArr.push(arr[i + 2][m]);
                }
                tempArr.push(arr[i + 1][j + 1]);
                hourglass[k] = tempArr.reduce(myFunc);
                k += 1;
            }
        }
        console.log(Math.max.apply(null, hourglass));
    }

    function myFunc(total, value) {
        return total + value;
    }
};

/**
 * Day 12: Inheritance
 */

exports.inheritancePersonAndStudent = () => {
    // class Persons {
    //     constructor() {
    //         // Write code
    //     }
    // }

    class Student extends Persons {
        /*
         *   Class Constructor
         *
         *   @param firstName - A string denoting the Person's first name.
         *   @param lastName - A string denoting the Person's last name.
         *   @param id - An integer denoting the Person's ID number.
         *   @param scores - An array of integers denoting the Person's test scores.
         */
        // Write your constructor here
        constructor(firstName, lastName, id, scores) {
            super();
            this.firstName = firstName;
            this.lastName = lastName;
            this.idNumber = id;
            this.scores = scores;
        }

        /*
         *   Method Name: calculate
         *   @return A character denoting the grade.
         */
        // Write your method here

        calculate() {
            // Desctucturing
            const {
                scores
            } = this;
            const scoreTotal = scores.reduce((prev, current) => prev + current, 0);
            const averageScore = scoreTotal / scores.length;
            if (averageScore >= 90) return "O";
            if (averageScore >= 80) return "E";
            if (averageScore >= 70) return "A";
            if (averageScore >= 55) return "P";
            if (averageScore >= 40) return "D";
            return "T";
        }
    }
};

/**
 * Day 13: Abstract Classes
 */
exports.abstractClasses = () => {

    // // Declare your class here.
    // class MyBook extends Book {
    //     /**   
    //      *   Class Constructor
    //      *   
    //      *   @param title The book's title.
    //      *   @param author The book's author.
    //      *   @param price The book's price.
    //      **/
    //     // Write your constructor here
    //     constructor(title, author, price) {
    //         super(title, author);
    //         this.price = price;
    //     }
    //     /**   
    //      *   Method Name: display
    //      *   
    //      *   Print the title, author, and price in the specified format.
    //      **/
    //     // Write your method here
    //     display() {
    //         console.log(`Title: ${title}`);
    //         console.log(`Author: ${author}`);
    //         console.log(`Price: ${price}`);
    //     }
    // }
    // // End class

};

/**
 * Day 14: Scope
 */

exports.scores = () => {
    /**
    c++
    Difference(vector<int> a) {
        this -> elements = a;
    }
    void computeDifference(){
        int maxValue = elements[elements.size()-1], minValue = elements[0]; 
        for (int i = 0; i < elements.size(); i++){
            if (maxValue < elements[i]){
                maxValue = elements[i];
            }
        }
        for (int i = 0; i < elements.size(); i++){
            if (minValue > elements[i]){
                minValue = elements[i];
            }
        }
        maximumDifference = maxValue - minValue;
    }

     */
}
/**
 * Day 15: Linked List
 */

exports.linkedList = () => {
    function Solution() {

        this.insert = function (head, data) {
            //complete this method
            // Create a new node with the data passed in
            newNode = new Node(data);
            // Set the current node as the passed in head
            curNode = head;

            // If the current node is not null (it has values), walk the node list
            if (curNode != null) {
                while (curNode.next != null) {
                    curNode = curNode.next;
                }
                curNode.next = newNode;
            }
            // Otherwise, if the list is empty, return the created node
            else {
                head = newNode;
            }

            return head;
        };

        this.display = function (head) {
            var start = head;
            while (start) {
                process.stdout.write(start.data + " ");
                start = start.next;
            }
        };
    }
}

/**
 * Day 16: Exceptions - String to Integer
 */