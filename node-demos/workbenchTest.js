const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

// console.log(`TCL: Benchmark.platform`, Benchmark.platform);

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf

const twoSum = function(nums, target) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (temp[need] !== undefined) {
      return [i, temp[need]];
    } else {
      temp[nums[i]] = i;
    }
  }
};

const s2 = new Benchmark({
  name: "twoSum",
  fn: () => {
    twoSum([2, 7, 11, 15], 9)
  },
  onComplete: event => {
    console.log(String(event.target));
  }
})

s2.run()