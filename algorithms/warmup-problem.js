/**
 * In JavaScript that is designed to be executed in the browser, it's considered a best practice to avoid using methods on console. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using console should be stripped before being pushed to production.
 */
/**
 * 1 Solve Me First
 * solveMeFirst(2, 3)
 */
exports.solveMeFirst = (a, b) => {
    // Hint: Type return a+b below
    let sum = 0;
    sum = parseInt(a, 10) + parseInt(b, 10);
    return sum;
};
//
/**
 * 2 Simple Array Sum
 * let ar = [1, 2, 3, 4, 10, 11];
 * simpleArraySum(ar);
 * Sample Output:  31
 *
 */
exports.simpleArraySum = (ar) => {
    /*
     * Write your code here.
     */
    let total = 0;
    const integerArrayLength = Array.isArray(ar) ? ar.length : false;
    if (integerArrayLength && integerArrayLength > 0) {
        for (const i in ar) {
            if (ar[i] <= 1000) {
                total += ar[i];
            }
        }
    } else {
        // console.log("Empty Array");

        return "Empty Array";
    }

    return total;
};


/**
 * 3 compareTheTriplets
 * @param {*} arr1
 * @param {*} arr2
 * const array1 = [1, 28, 30];
 * const array2 = [99, 16, 1];
 * compareTheTriplets(array1, array2);
 *
 */
exports.compareTheTriplets = (arr1, arr2) => {
    try {
        let resultArr = [];
        let alice = 0;
        let bob = 0;
        if (arr1.length !== arr2.length && arr1.length !== 3 && arr2.length !== 3) return false;

        for (let i = 0; i < arr1.length; i += 1) {
            if (parseInt(arr1[i], 10) >= 1 && parseInt(arr1[i], 10) <= 100 && parseInt(arr2[i], 10) >= 1 && parseInt(arr2[i], 10) <= 100) {
                if (parseInt(parseInt(arr1[i], 10), 10) === parseInt(parseInt(arr2[i], 10), 10)) {
                    alice += 0;
                    bob += 0;
                } else if (parseInt(arr1[i], 10) > parseInt(arr2[i], 10)) {
                    alice += 1;
                    bob += 0;
                } else if (parseInt(arr1[i], 10) < parseInt(arr2[i], 10)) {
                    alice += 0;
                    bob += 1;
                }
            } else {
                resultArr = null;
            }
        }

        if (resultArr) {
            resultArr.push(parseInt(alice, 10), parseInt(bob, 10));
        } else {
            resultArr = [];
        }

        return resultArr;
    } catch (error) {
        console.error(error);
    }
};
//
/**
 * 4 aVeryBigSum
 * const ar = [10000000008, 1000000002, 1000000003, 1000000004, 1000000005];
 * aVeryBigSum(ar)
 */
exports.aVeryBigSum = (ar) => {
    try {
        const largeLimit = 10000000000;
        let i;
        let total = 0;
        for (i = 0; i < ar.length; i += 1) {
            if (parseInt(ar[i], 10) >= 0 && parseInt(ar[i], 10) <= largeLimit) {
                total += ar[i];
            } else {
                console.error(`This Array of element does'n consider constraints range ${parseInt(ar[i], 10)} `);
            }
        }
        return parseInt(total, 10);
    } catch (error) {
        console.error(error);
    }
};

/**
 * 5 diagonalDifference
 * const arr = [ [1, 2, 3], [4, 5, 6], [9, 8, 9] ]
 * diagonalDifference(arr);
 */
exports.diagonalDifference = (arr) => {
    try {
        const arrLength = arr.length;
        let d1 = 0;
        let d2 = 0;
        for (let i = 0; i < arrLength; i += 1) {
            for (let j = 0; j < arrLength; j += 1) {
                // Finding sum of primary diagonal
                if (i === j) {
                    if (arr[i][j] >= -100 && arr[i][j] <= 100) {
                        d1 += arr[i][j];
                    }
                }
                // Finding sum of secondary diagonal
                if (i === arrLength - j - 1) {
                    if (arr[i][j] >= -100 && arr[i][j] <= 100) {
                        d2 += arr[i][j];
                    }
                }
            }
        }

        return Math.abs(d1 - d2);
    } catch (error) {
        console.error(error);
    }
};
// 6
exports.plusMinus = async (arr) => {
    try {
        let positiveCount = 0;
        let negativeCount = 0;
        let zeroCount = 0;
        const arrLength = arr.length;
        for (let i = 0; i < arrLength; i += 1) {
            if (arr[i] > 0) {
                positiveCount += 1;
            } else if (arr[i] < 0) {
                negativeCount += 1;
            } else if (arr[i] === 0) {
                zeroCount += 1;
            }
        }
        return `${(parseInt(positiveCount, 10) / parseInt(arrLength, 10)).toFixed(6)}\n${(parseInt(negativeCount, 10) / parseInt(arrLength, 10)).toFixed(6)}\n${(parseInt(zeroCount, 10) / parseInt(arrLength, 10)).toFixed(6)}`;
    } catch (error) {
        console.error(error);
    }
};
// 7
exports.staircase = async (n) => {
    try {
        let mainContain = "";
        const length = parseInt(n, 10);
        for (let i = 0; i < length; i += 1) {
            let contain = "";
            for (let j = 0; j < length; j += 1) {
                if (j < n - i - 1) {
                    contain += " ";
                } else {
                    contain += "#";
                }
            }
            mainContain += `${contain}\n`;
        }
        return mainContain;
    } catch (error) {
        console.error(error);
    }
};
// 8
/**
 * Complete the miniMaxSum function below.
 * let arr = [256741038, 623958417, 467905213, 714532089, 938071625]
 * miniMaxSum(arr);
 */
exports.miniMaxSum = async (arr) => {
    try {
        const {
            length
        } = arr;
        let minimumSum = 0;
        let maximumSum = 0;
        // Sort objects by date ascending order
        const arrSort = arr.sort((a, b) => a - b);
        for (let i = 0; i < length; i += 1) {
            if (i !== 0) {
                maximumSum += arrSort[i];
            }
            if (i !== length - 1) {
                minimumSum += arrSort[i];
            }
        }
        return `${minimumSum} ${maximumSum}`;
    } catch (error) {
        console.error(error);
    }
};
// 9
/**
 * Complete the birthdayCakeCandles function below.
 * let ar = [4, 2, 1, 4]
 * birthdayCakeCandles(ar);
 */
exports.birthdayCakeCandles = async (ar) => {
    try {
        // Step 1
        // ar.sort((a, b) => a - b);
        // const maxs = ar[ar.length - 1];
        // return ar.filter(ch => ch === maxs).length;

        // step 2

        const max = Math.max.apply(null, ar);
        return ar.filter((ch) => ch === max).length;
    } catch (error) {
        console.error(error);
    }
};

// 10
/*
 * Complete the timeConversion function below.
 * let s = "07:05:45PM"
 * ltimeConversion(s);
 */
exports.timeConversion = async (s) => {
    try {
        // step 2
        // Convert a string like 10:05:23 PM to 24h format, returns like [22,5,23]
        // const time = s.match(/(\d+):(\d+):(\d+)(\w)/);
        // let hours = time[1];
        // const minutes = time[2];
        // const seconds = time[3];
        // const meridian = time[4].toLowerCase();

        // if (meridian == 'p' && hours < 12) {
        //     hours += 12;
        // } else if (meridian == 'a' && hours == 12) {
        //     hours -= 12;
        // }
        // console.log(`${hours}:${minutes}:${seconds}`);
        // return `${hours}:${minutes}:${seconds}`;

        // step 2
        const time = s.toLowerCase().split(":");
        const hours = parseInt(time[0], 10);
        const ampm = time[2];
        if (ampm.indexOf("am") !== -1 && hours === 12) {
            time[0] = "00";
        }
        if (ampm.indexOf("pm") !== -1 && hours < 12) {
            time[0] = hours + 12;
        }

        return time.join(":").replace(/(am|pm)/, "");
    } catch (error) {
        console.error(error);
    }
};
// 11
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 * let grades = [73, 67, 38, 33]
 * gradingStudents(grades)
 */

exports.gradingStudents = async (grades) => {
    try {
        // step 1
        let gradesOutput = "";
        grades.forEach((integer) => {
            if ((integer % 5) >= 3 && integer >= 38) {
                gradesOutput += `${integer + (5 - (integer % 5))}\n`;
            } else {
                gradesOutput += `${integer}\n`;
            }
        });
        // print the rounded grade on a new line.
        return gradesOutput;
        // console.log(gradesOutput);


        // step 2
        // let gradesOutput = "";
        /*
        const result = [];
        grades.forEach((integer) => {
            if ((integer % 5) >= 3 && integer >= 38) {
                result.push(integer + (5 - (integer % 5)));
            } else {
                result.push(integer);
            }
        });
        // return array
        return result;
        */
    } catch (error) {
        console.error(error);
    }
};

/**
 * 12
 * Complete the countApplesAndOranges function below.
 * countApplesAndOranges(7, 11, 5, 15, [-2, 3, 2], [1])
 */

exports.countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let fallsApple = 0;
    let fallsOrang = 0;
    apples.map((apple) => (((a + apple) >= s && (a + apple) <= t) ? fallsApple += 1 : fallsApple));
    oranges.map((orange) => (((b + orange) >= s && (b + orange) <= t) ? fallsOrang += 1 : 0));

    return `${fallsApple} ${fallsOrang}`;
};

/**
 * 13
 * Complete the kangaroo function below.
 *
 */

exports.kangaroo = (x1, v1, x2, v2) => {
    if ((x2 > x1) && (v2 > v1)) return "NO";
    if (((x1 - x2) % (v2 - v1)) === 0) return "YES";
    return "NO";
};

/**
 * 14: Between Two Sets
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 *
 */

exports.getTotalX = (a, b) => {
    const res = [];
    let count = 0;
    let flag = true;
    let check = true;
    for (let i = a[a.length - 1]; i <= b[0]; i += 1) {
        for (let j = 0; j < a.length && check === true; j += 1) {
            if (i % a[j] !== 0) {
                check = false;
            }
        }
        if (check !== false) {
            res.push(i);
        }
        check = true;
    }

    for (let i = 0; i < res.length; i += 1) {
        for (let j = 0; j < b.length && flag === true; j += 1) {
            if ((Math.max(res[i], b[j]) % Math.min(res[i], b[j])) !== 0) {
                flag = flag;
                res[i] = 0;
            }
        }
        flag = true;
    }

    for (let i = 0; i < res.length; i += 1) {
        if (res[i] > 0) {
            count += 1;
        }
    }
    return count;
};

/**
 * 15: Breaking the Records
 * Complete the breakingRecords function below.
 *
 */

exports.breakingRecords = () => {
    try {
        const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
        let max = scores[0];
        let min = scores[0];
        let maxCount = 0;
        let minCount = 0;

        for (const item of scores) {
            if (item > max) {
                max = item;
                maxCount += 1;
            } else if (item < min) {
                min = item;
                minCount += 1;
            }
        }

        // console.log(maxCount, minCount);
        return [maxCount, minCount];
    } catch (error) {
        console.error(error);
    }
};
/**
 * 16: Birthday Chocolate
 * Complete the birthday function below.
 *
 */

exports.birthdayChocolate = (s, d, m) => {
    //     5
    // 1 2 1 3 2
    // 3 2
    // Your Output (stdout)
    // 2
    try {
        // const reducer = (a, c) => a + c;
        // let count = 0;
        // for (let i = 0; i < s.length; i += 1) {
        //     const temp = s.slice(i, m + i);
        //     if (temp.reduce(reducer) === d) {
        //         count += 1;
        //     }
        // }
        // console.log(count);
        // return count;
        this.divisibleSumPairs(100, 22, [43, 95, 51, 55, 40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47, 73, 25, 27, 14, 8, 26, 58, 95, 28, 3, 23, 48, 69, 26, 3, 73, 52, 34, 7, 40, 33, 56, 98, 71, 29, 70, 71, 28, 12, 18, 49, 19, 25, 2, 18, 15, 41, 51, 42, 46, 19, 98, 56, 54, 98, 72, 25, 16, 49, 34, 99, 48, 93, 64, 44, 50, 91, 44, 17, 63, 27, 3, 65, 75, 19, 68, 30, 43, 37, 72, 54, 82, 92, 37, 52, 72, 62, 3, 88, 82, 71]);
    } catch (error) {
        console.error(error);
    }
};

/**
 * 17: Divisible Sum Pairs
 * Complete the divisibleSumPairs function below.
 * birthdayChocolate([1, 2, 1, 3, 2], 3, 2);
 */
exports.divisibleSumPairs = (n, k, ar) => {
    try {
        // Write a code here
        let pairs = 0;

        // for (const i of ar) {
        //     for (const j of ar) {
        //         if ((i < j) && ((i + j) % k === 0)) {
        //             pairs += 1;
        //         }
        //     }
        // }


        for (let i = 0; i < n; i += 1) {
            for (let j = i + 1; j < n; j += 1)
                if ((i < j) && ((ar[i] + ar[j]) % k === 0)) pairs += 1;
        }

        console.log(pairs);
    } catch (error) {
        console.error(error);
    }
};