function swap(swapPairs) {
    if(!Array.isArray(swapPairs)) {
        console.log([]);
        return [];
    }
    let result = [];
    for(let pair of swapPairs)
        result.push([pair[1], pair[0]]);
    console.log(result);
    return result;
}

swap([['hello', 'world'], ['apple', 'banana'], ]);  // [['world', 'hello'], ['banana', 'apple']]
swap([[1, 'one'], [true, false]]);                  // [['one', 1], [false, true]]
swap([['a', 'b', 'c']]);                            // [['b', 'a']]
swap(undefined);                                    // []
swap([]);                                           // []

function math(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if(num1 !== num1 || num2 !== num2) {
        console.log('Invalid numbers');
        return 'Invalid numbers';
    }
    switch(operator) {
        case '+':
            return console.log(num1 + num2);
        case '-':
            return console.log(num1 - num2);
        case '*':
            return console.log(num1 * num2);
        case '/':
            return console.log(num1 / num2);
        default:
            return console.log('Invalid operator');
    }
}

math(1, '+', 1);        // 2
math(5, '-', 1);        // 4
math(8, '*', 2);        // 16
math(64, '/', 2);       // 32
math(-128, '/', -2);    // 64
math(40, '*', 3.2);     // 128
math('128', '+', 128);  // 256
math(512, '/', 0);      //Infinity

function multiplicationTable(rows, columns) {
    const result = [];
    for(let i = 1; i <= rows; i++) {
        const row = [];
        for(let j = 1; j <= columns; j++) {
            row.push(i * j);
        } result.push(row);
    }
    console.log(result);
    return result;
}

multiplicationTable(3, 3);
// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9],
// ]

multiplicationTable(2, 4);
// 出力:
// [
//   [1, 2, 3, 4],
//   [2, 4, 6, 8]
// ]

function group(array, key) {
    if(!Array.isArray(array)) {
        console.log({})
        return {}
    }
    const result = {};
    while(array.length >0) {
        const item = array.shift();
        const groupKey = item[key];

        if(!result[groupKey]) {
            result[groupKey] = [];
        } result[groupKey].push(item);
    }
    console.log(result);
    return result;
}

const list = [
    { name: 'apple', type: 'fruit' },
    { name: 'banana', type: 'fruit' },
    { name: 'carrot', type: 'vegetable' },
    { name: 'grape', type: 'fruit' },
    { name: 'onion', type: 'vegetable' },
];

  group(list, 'type');
  // {
  //   fruit: [
  //     { name: 'apple', type: 'fruit' },
  //     { name: 'banana', type: 'fruit' },
  //     { name: 'grape', type: 'fruit' },
  //   ],
  //   vegetable: [
  //     { name: 'carrot', type: 'vegetable' },
  //     { name: 'onion', type: 'vegetable' },
  //   ]
  // }

const list2 = [
    { number: 'sps1040', type: 'spindle' },
    { number: 'grs0099', type: 'grinder' },
    { number: 'grs0100', type: 'grinder' },
    { number: 'sps1041', type: 'spindle' },
    { number: 'grs0032', type: 'grinder' },
    { number: 'mis0040', type: 'milling' },
];

  group(list2, 'type');
  // {
  //   grinder: [
  //     { number: 'grs0099', type: 'grinder' },
  //     { number: 'grs0100', type: 'grinder' },
  //     { number: 'grs0032', type: 'grinder' },
  //   ],
  //   milling: [
  //     { number: 'mis0040', type: 'milling' },
  //   ],
  //   spindle: [
  //     { number: 'sps1040', type: 'spindle' },
  //     { number: 'sps1041', type: 'spindle' },
  //   ]
  // }

function onlyString(array) {
    console.log(array.filter(element => typeof element === 'string'));
    return array.filter(element => typeof element === 'string');
}

onlyString([1, 2, 'hello', 3, 'world']);    // ['hello', 'world']
onlyString(['hello', 'world', '']);         // ['hello', 'world', '']
onlyString(['1', 2, '3']);                  // ['1', '3']
onlyString([]);                             // []
onlyString(['🐊', undefined, null, {key: 'value'}, ['a', 'b']]); // ['🐊']

function execute(array, callback) {
    if (array.length === 0) {
        console.log('Araay is empty');
        return;
    }
    let i = 0;
    while(i < array.length) {
        callback(array[i]);
        i++
    }
}

function filter(array, predicate) {
    const result = [];
    let i = 0;
    while(i < array.length) {
        if(predicate(array[i])) {
            result.push(array[i]);
        } i++;
    } return result;
}

const nums = [0, 1, 2, 3, 4, 5];
execute(
  filter(nums, (n) => n % 2 === 0),
  (n) => {
    console.log(`${n} is even`);
    // 0 is even
    // 2 is even
    // 4 is even
  }
);

const emptyArray = [];
execute(
    filter(emptyArray, (n) => n > 0),
    (n) => console.log(n)
    // Array is empty
);

function toIndex(array) {
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > maxIndex) {
            maxIndex = array[i];
        }
    }
    const  result = [];
    for(let i = 0; i <= maxIndex; i++) {
        result.push(null);
    }
    for(let i = 0; i < array.length; i++) {
        result[array[i]] = array[i];
    }
    console.log(result);
    return result;
}

const arr1 = [3, 0, 2, 1];
const arr2 = [5, 2, 1, 6];
const arr3 = [];
const arr4 = [8];
const arr5 = [3, 3, 0, 0, 2, 2, 1, 1];

toIndex(arr1); // [0, 1, 2, 3]
toIndex(arr2); // [null, 1, 2, null, null, 5, 6]
toIndex(arr3); // [null]
toIndex(arr4); // [null, null, null, null, null, null, null, null, 8]
toIndex(arr5); // [0, 1, 2, 3]

function median(center, count, step = 1) {
    const result = [center];
    for(let i = 1; i <= count; i++) {
        result.push(center + (i * step));
    }
    for(let i = 1; i <= count; i++) {
        result.unshift(center - (i * step));
    }
    console.log(result);
    return result;
}

median(5, 2);       // [3, 4, 5, 6, 7]
median(10, 5);      // [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
median(8, 4, 2);    // [0, 2, 4, 6, 8, 10, 12, 14, 16]
median(-8, 4, 2);   // [-16, -14, -12, -10, -8, -6, -4, -2, 0]
median(0, 3);       // [-3, -2, -1, 0, 1, 2, 3]
median(10, 0);      // [10]
median(3, 2, 0.5);  // [2, 2.5, 3, 3.5, 4]

function slice(array, start, end) {
    if(!Array.isArray(array)) {
        console.log([]);
        return [];
    }
    const len = array.length;
    start = start || 0;
    if (start < 0) {
        start = len + start;
    }
    if(start >= len) {
        console.log([]);
        return [];
    }
    start = start < 0 ? 0 : start;
    if(end === undefined) {
        end = len;
    } else if(end < 0) {
        end = len + end;
    }
    end = end > len ? len : end;
    if(end <= start) {
        console.log([]);
        return [];
    }
    const result = [];
    for(let i = start; i < end; i++) {
        result.push(array[i]);
    }
    console.log(result);
    return result;
}

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5];

slice(testArr1, 1, 3); // [2, 3]
slice(testArr2, 1);    // [2, 3, 4, 5]
slice(testArr1, -3, -1); // [3, 4]
slice(testArr1, -2); // [4, 5]
slice(testArr1, 6); // []
slice(testArr1, -6, 3); // [1, 2, 3]
slice(testArr1, 0, 6); // [1, 2, 3, 4, 5]
slice(testArr1, 0, 0); // []
slice([], 0, 6); // []
slice(123, 1, 3); // []

function lock(secret, password, options) {
    let attemptCount = 0;
    const limit = options && options.max > 0 ? options.max : Infinity;
    const startDate = options && options.startDate ? new Date(options.startDate) : null;
    const endDate = options && options.endDate ? new Date(options.endDate) : null;
    return function(attemptPassword) {
        const now = new Date();
        if(startDate && now < startDate) {
            console.log(false);
            return false;
        }
        if(endDate && now > endDate) {
            console.log(false);
            return false;
        }
        attemptCount++;
        if(attemptCount > limit) {
            console.log(false);
            return false;
        }
        const result = attemptPassword === password ? secret : false;
        console.log(result);
        return result;
    };
}

function mockDate(mockedDate) {
    const OriginalDate = Date;
    window.Date = class extends OriginalDate {
        constructor(...args) {
            if (args.length) {
                return new OriginalDate(...args);
            }
            return new OriginalDate(mockedDate);
        }
    };
}

const locked1 = lock('secret', 'password');
locked1('password');       // secret
locked1('wrong-password'); // false

const locked2 = lock('secret', 'password', { max: 1 });
locked2('password'); // secret
locked2('password'); // false

// 仮に今日が 2024/01/01 だとする
mockDate('2024-01-01T00:00:00Z'); // 日付を 2024/01/01 に設定
const locked3 = lock('secret', 'password', { max: 3, startDate: '2024/01/01', endDate: '2024/01/03' });
locked3('password'); // secret
locked3('password'); // secret

// 仮に 2024/01/01 から1週間経過したとする
mockDate('2024-01-08T00:00:00Z'); // 日付を 2024/01/08 に設定
locked3('password'); // false

// Date クラスを元に戻す
window.Date = Date;

function isAnagram(string1, string2) {
    const cleanString = (string) => {
      let result = [];
      for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
          result.push(string[i]);
        }
      }
      return result;
    };
    const sortArray = (array) => {
      let sorted = [];
      while (array.length > 0) {
        let minIndex = 0;
        for (let i = 1; i < array.length; i++) {
          if (array[i] < array[minIndex]) {
            minIndex = i;
          }
        }
        sorted.push(array[minIndex]);
        array.splice(minIndex, 1);
      }
      return sorted;
    };
    const sortedString1 = sortArray(cleanString(string1));
    const sortedString2 = sortArray(cleanString(string2));
    if (sortedString1.length !== sortedString2.length) {
      console.log(false);
      return false;
    }
    for (let i = 0; i < sortedString1.length; i++) {
        if (sortedString1[i] !== sortedString2[i]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
  }
isAnagram('cat', 'act');                        // true
isAnagram('elbow', 'Below');                    // false
isAnagram('vacation time', 'i am not active');  // true
isAnagram('', '');                              // true
isAnagram('apple', '');                         // false
isAnagram('c a t', 'a c t');                    // true
isAnagram('eee', 'eee');                        // true
isAnagram('eeee', 'eee');                       // false
isAnagram('くるま', 'まくら');                   // false
isAnagram('こしょう', 'しょうこ');               // true

function expected(value) {
    function shallowEqual(value1, value2) {
      if (Array.isArray(value1) && Array.isArray(value2)) {
        if (value1.length !== value2.length) return false;
        for (let i = 0; i < value1.length; i++) {
          if (!shallowEqual(value1[i], value2[i])) return false;
        }
        return true;
    }
    if (value1 && typeof value1 === 'object' && value2 && typeof value2 === 'object') {
        const keys1 = Object.keys(value1);
        const keys2 = Object.keys(value2);
        if (keys1.length !== keys2.length) return false;
        for (let key of keys1) {
            if (!shallowEqual(value1[key], value2[key])) return false;
        }
        return true;
      }
      return value1 === value2;
    }
    return {
        toBe: function (expectedValue) {
            const result = shallowEqual(value, expectedValue);
            console.log(result);
            return result;
        }
    };
}

expected(2).toBe(2);                 // true
expected(true).toBe(false);          // false
expected([1, 2, 3]).toBe([1, 2, 3]); // true
expected({ a: 1 }).toBe({ b: 2 });   // false
expected({ a: [1, 2, 3] }).toBe({ a: [1, 2, 3] }); // true
expected(undefined).toBe(undefined); // true
expected(NaN).toBe(NaN);             // false
expected([]).toBe([]);               // true
expected({}).toBe({});               // true

function zigZag(array, times) {
    const n = array.length;
    let direction = 'right';
    function clearArray() {
        array.fill('');
    }
    for (let t = 0; t < times; t++) {
        if (direction === 'right') {
            for (let i = 0; i < n; i++) {
                clearArray();
                array[i] = '>>>';
                console.log([...array]);
            }
            direction = 'left';
        } else {
        for (let i = n - 1; i >= 0; i--) {
            clearArray();
            array[i] = '<<<';
            console.log([...array]);
        }
        direction = 'right';
        }
    }
    return array;
}

const array = ['', '', '', '', ''];

zigZag(array, 4);
zigZag(array, 3);
zigZag(array, 2);
zigZag(array, 1);
zigZag([''], 3);
zigZag(['', '', '', '', '', '', '', ''], 3);

function collection(coll, callback) {
    if (Array.isArray(coll)) {
        let i = 0;
        while (i < coll.length) {
            callback(coll[i], i, coll);
            i++;
        }
    } else {
        for (let key in coll) {
            if (coll.hasOwnProperty(key)) {
            callback(coll[key], key, coll);
            }
        }
    }
    console.log(coll);
    return coll;
}

const arr = [1, 2, 3];
const obj = { a: 1, b: 2, c: 3 };
const nestedArr = [1, [2, 3], 4];
const nestedObj = { a: 1, b: { c: 2, d: 3 }, e: 4 };

function doSomething(value, indexOrKey, arrOrObj) {
    // do something
}

collection(arr, doSomething);   // [1, 2, 3]
collection(obj, doSomething);   //{a: 1, b: 2, c: 3}
collection(nestedArr, doSomething); // [1, [2, 3], 4]
collection(nestedObj, doSomething); // { a: 1, b: { c: 2, d: 3 }, e: 4 }
collection([], doSomething);    // []
collection({}, doSomething);    // {}

function alphabetically(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        array.push(input[i]);
    }
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            }
        }
    }
    let sortedString = '';
    while (array.length > 0) {
        sortedString += array.shift();
    }
    console.log(sortedString);
    return sortedString;
}

const str1 = 'qwertyuioplkjhgfdsazxcvbnm';
const str2 = 'ybxazc';
const str3 = 'alphabetically';
const str4 = '';
const str5 = 'a';
const str6 = 'abcdabcdabcd';
const str7 = '1a2b3c';
const str8 = 'aAbBcC';
const str9 = 'aあiいuうeえoお';
const str10 = ' a b c';

alphabetically(str1); // abcdefghijklmnopqrstuvwxyz
alphabetically(str2); // abcxyz
alphabetically(str3); // aaabcehilllpty
alphabetically(str4); //
alphabetically(str5); // a
alphabetically(str6); // aaabbbcccddd
alphabetically(str7); // 123abc
alphabetically(str8); // ABCabc
alphabetically(str9); // aeiouあいうえお
alphabetically(str10); //    abc

function socialNetworkingService() {
    const accounts = [];
    const posts = [];
    const likes = {};
    return function socialNetworkingService(action, payload) {
        switch (action) {
            case 'CREATE_ACCOUNT': {
                const existingAccount = accounts.find(acc => acc.id === payload.id);
                if (existingAccount) return false;
                accounts.push({ id: payload.id, name: payload.name, emailAddress: payload.emailAddress, posts: [] });
                return true;
            }
            case 'GET_ACCOUNT': {
                const account = accounts.find(acc => acc.id === payload.id);
                return account || false;
            }
            case 'CREATE_POST': {
                const account = accounts.find(acc => acc.id === payload.accountId);
                if (!account) return false;
                if (payload.body.length > 140) return false;
                const post = { id: payload.id, accountId: payload.accountId, body: payload.body };
                posts.push(post);
                account.posts.push(post);
                likes[payload.id] = [];
                return true;
            }
            case 'GET_POSTS': {
                const account = accounts.find(acc => acc.id === payload.id);
                if (!account) return false;
                return account.posts.map(post => ({ id: post.id, body: post.body }));
            }
            case 'ADD_LIKE': {
                const post = posts.find(post => post.id === payload.id);
                if (!post) return false;
                if (!likes[post.id].includes(payload.accountId)) {
                    likes[post.id].push(payload.accountId);
                }
                return true;
            }
            case 'DELETE_ACCOUNT': {
                const accountIndex = accounts.findIndex(acc => acc.id === payload.id);
                if (accountIndex === -1) return false;
                accounts.splice(accountIndex, 1);
                return true;
            }
            default: {
                return false;
            }
        }
    };
}

const sns = socialNetworkingService();

// --------------------------------------------------

const tmcAccount =  { id: 1, name: 'TMC', emailAddress: 'tmc@fake-email.com' };
const digAccount =  { id: 2, name: 'DIG', emailAddress: 'dig@fake-email.com' };

sns('CREATE_ACCOUNT', tmcAccount); // true
sns('CREATE_ACCOUNT', digAccount); // true
sns('CREATE_ACCOUNT', tmcAccount); // false（同じアカウントは存在できない）

// --------------------------------------------------

sns('GET_ACCOUNT', { id: tmcAccount.id });
// {
//   id: 1,
//   name: 'TMC',
//   emailAddress: 'tmc@fake-email.com',
//   posts: [],
//   likes: [],
// }
sns('GET_ACCOUNT', { id: digAccount.id });
// {
//   id: 2,
//   name: 'DIG',
//   emailAddress: 'dig@fake-email.com',
//   posts: [],
//   likes: [],
// }
sns('GET_ACCOUNT', { id: 1000 }); // false（アカウントが存在しない）

// --------------------------------------------------

const post1 = {
  id: 1,
  accountId: 1,
  body: 'I want to join this bootcamp',
};
const post2 = {
  id: 2,
  accountId: 1,
  body: 'I will pass this test',
};
const post3 = {
  id: 3,
  accountId: 2,
  body: 'I am studying HTML, CSS and JavaScript. I want to built a web application in the near future. I am looking forward to learning more about server-side, database and other technologies. I am excited to learn more about the web development.',
};

sns('CREATE_POST', post1); // true
sns('CREATE_POST', post2); // true
sns('CREATE_POST', post3); // false（140文字以下のみ投稿可能）

// --------------------------------------------------

sns('GET_POSTS', { id: tmcAccount.id });
// [
//   {
//     id: 1,
//     body: 'I want to join this bootcamp',
//   },
//   {
//     id: 2,
//     body: 'I will pass this test',
//   }
// ]
sns('GET_POSTS', { id: digAccount.id }); // []
sns('GET_POSTS', { id: 1000 });          // false（アカウントが存在しない）

// --------------------------------------------------

sns('ADD_LIKE', { id: post1.id, accountId: digAccount.id }); // true
sns('ADD_LIKE', { id: post2.id, accountId: digAccount.id }); // true

// --------------------------------------------------

sns('GET_LIKES', { id: tmcAccount.id }); // []
sns('GET_LIKES', { id: digAccount.id });
// [
//   {
//     id: 1,
//     body: 'I want to join this bootcamp',
//   },
//   {
//     id: 2,
//     body: 'I will pass this test',
//   }
// ]
sns('GET_LIKES', { id: 1000 }); // false（アカウントが存在しない）

// --------------------------------------------------

sns('DELETE_LIKES', { id: post2.id, accountId: digAccount.id }); // true
sns('GET_LIKES', { id: digAccount.id });
// [
//   {
//     id: 1,
//     body: 'I want to join this bootcamp',
//   }
// ]

// --------------------------------------------------

sns('GET_LIKES_COUNT', { id: tmcAccount.id }); // 0
sns('GET_LIKES_COUNT', { id: digAccount.id }); // 1

// --------------------------------------------------

sns('SEARCH_POSTS', { id: tmcAccount.id, query: 'I want to' });
// [
//   {
//     id: 1,
//     body: 'I want to join this bootcamp',
//   }
// ]
sns('SEARCH_POSTS', { id: 1000, query: 'This was not found' }); // false（アカウントまたは投稿が存在しない）

// --------------------------------------------------

sns('DELETE_POST', { id: post2.id, accountId: tmcAccount.id }); // true
sns('GET_POSTS', { id: tmcAccount.id });
// [
//   {
//     id: 1,
//     body: 'I want to join this bootcamp',
//   }
// ]
sns('DELETE_POST', { id: 1000, accountId: 2000 }); // false（アカウントまたは投稿が存在しない）

// --------------------------------------------------

sns('DELETE_ACCOUNT', { id: tmcAccount.id }); // true
sns('DELETE_ACCOUNT', { id: 1000 });          // false（アカウントが存在しない

function flat(array, depth = Infinity) {
    const result = [];
    const stack = [];
    for (let i = array.length - 1; i >= 0; i--) {
        stack.push({ item: array[i], level: 0 });
    }
    while (stack.length > 0) {
        const current = stack.pop();
        const item = current.item;
        const level = current.level;
        if (Array.isArray(item) && level < depth) {
            if (level + 1 === depth) {
                result.push(item);
            } else {
                for (let i = item.length - 1; i >= 0; i--) {
                    stack.push({ item: item[i], level: level + 1 });
                }
            }
        } else {
            result.push(item);
        }
    }
    console.log(result);
    return result;
}

const flatArr1 = [1, [2], [3, 4, [5]]];
const flatArr2 = [1, [2], [3, 4, [5]]];

flat(flatArr1);    // [1, 2, 3, 4, 5]
flat(flatArr2, 1); // [1, [2], [3, 4, [5]]
flat(flatArr2, 2); // [1, 2, 3, 4, [5]]
flat(flatArr2, 3); // [1, 2, 3, 4, [5]]
flat([]);          // []
flat([[[]]]);      // []

function stringify(value) {
    if (value === null) return 'null';
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }
    if (typeof value === 'string') {
        return '"' + value + '"';
    }
    if (Array.isArray(value)) {
        let result = '[';
        for (let i = 0; i < value.length; i++) {
            if (i > 0) result += ',';
            result += stringify(value[i]);
        }
        return result + ']';
    }
    if (typeof value === 'object') {
        let result = '{';
        let isFirst = true;
        for (let key in value) {
            if (!isFirst) result += ',';
            result += '"' + key + '":' + stringify(value[key]);
            isFirst = false;
        }
        console.log(result + '}');
        return result + '}';
    }
    console.log(undefined);
    return undefined;
  }

const stringifyArr = [1, 2, 3];
const stringifyObj = { a: 1, b: '2', c: [{ d: 4 }, 5], d: true };

stringify(stringifyArr); // '[1,2,3]'
stringify(stringifyObj); // '{"a":1,"b":"2","c":[{"d":4},5],"d":true}'
