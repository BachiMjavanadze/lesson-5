'use strict';

// Array















const arr = ['nino', 'bachi', 'niko', 'beso', 'rezo'];
console.log(arr.lastIndexOf('bachi', 2));  // 1
console.log(arr.lastIndexOf('beso', 1));   // -1 _ ვერ იპოვა
console.log(arr.lastIndexOf('beso'));      // 3 _ იპოვა, რადგან ვეძებთ მთელს მასივში
