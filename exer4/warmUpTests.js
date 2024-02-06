// DO NOT EDIT BELOW THIS LINE
export function testToLetterGrade(func) {
  let letterGradeTests = [
    { input: -1, expected: "INVALID" },
    { input: 0, expected: "F" },
    { input: 59, expected: "F" },
    { input: 60, expected: "D" },
    { input: 69, expected: "D" },
    { input: 70, expected: "C" },
    { input: 79, expected: "C" },
    { input: 80, expected: "B" },
    { input: 89, expected: "B" },
    { input: 90, expected: "A" },
    { input: 100, expected: "A" },
    { input: 101, expected: "INVALID" },
  ];

  let success = true;
  for (let testCase of letterGradeTests) {
    let actual = func(testCase.input);
    if (actual !== testCase.expected) {
      console.log(
        `FAILED: toLetterGrade(${testCase.input}) expected ${testCase.expected} but got ${actual}`
      );
      success = false;
    }
  }
  if (success) {
    console.log("SUCCESS: toLetterGrade passed all tests!");
  }
}

export function testGetEvenElements(func) {
  let getEvenElementsTests = [
    { input: [1, 2, 3, 4, 5, 6], expected: [2, 4, 6] },
    { input: [1, 3, 5, 7, 9], expected: [] },
    { input: [2, 4, 6, 8, 10], expected: [2, 4, 6, 8, 10] },
    { input: [1, 2, 3, 4, 5, 6, 6], expected: [2, 4, 6, 6] },
  ];

  let success = true;
  for (let testCase of getEvenElementsTests) {
    let actual = func(testCase.input);
    if (actual == undefined) {
      console.log(
        `FAILED: getEvenElements(${testCase.input}) expected ${testCase.expected} but got undefined`
      );
      success = false;
      continue;
    }
    if (actual.length !== testCase.expected.length) {
      console.log(
        `FAILED: getEvenElements(${testCase.input}) expected ${testCase.expected} but got ${actual}`
      );
      success = false;
    } else {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== testCase.expected[i]) {
          console.log(
            `FAILED: getEvenElements(${testCase.input}) expected ${testCase.expected} but got ${actual}`
          );
          success = false;
        }
      }
    }
  }
  if (success) {
    console.log("SUCCESS: getEvenElements passed all tests!");
  }
}

export function testFindLongestWord(func) {
  let findLongestWordTests = [
    { input: "I love Bits of Good", expected: 4 },
    { input: "I", expected: 1 },
    { input: "I love Bits of Good so much", expected: 4 },
    { input: "The quick brown fox jumps over the lazy dog", expected: 5 },
    {
      input:
        "The sesquipedalian author eloquently elucidated the labyrinthine intricacies of quantum physics",
      expected: 14,
    }, // thanks ChatGPT
  ];

  let success = true;
  for (let testCase of findLongestWordTests) {
    let actual = func(testCase.input);
    if (actual !== testCase.expected) {
      console.log(
        `FAILED: findLongestWord(${testCase.input}) expected ${testCase.expected} but got ${actual}`
      );
      success = false;
    }
  }
  if (success) {
    console.log("SUCCESS: findLongestWord passed all tests!");
  }
}

export function testCombineObjects(func) {
  let combineObjectsTests = [
    {
      input: [
        { name: "Casey", age: 18 },
        { breed: "Pomeranian", friendly: false },
      ],
      expected: {
        name: "Casey",
        age: 18,
        breed: "Pomeranian",
        friendly: false,
      },
    },
    {
      input: [
        { name: "Casey", age: 18 },
        { breed: "Pomeranian", friendly: false, name: "Biscuit" },
      ],
      expected: {
        name: "Biscuit",
        age: 18,
        breed: "Pomeranian",
        friendly: false,
      },
    },
  ];

  let success = true;
  for (let testCase of combineObjectsTests) {
    let actual = func(...testCase.input);
    if (actual == undefined) {
      console.log(
        `FAILED: combineObjects(${JSON.stringify(
          testCase.input
        )}) expected ${JSON.stringify(testCase.expected)} but got undefined`
      );
      success = false;
      continue;
    }

    if (Object.keys(actual).length !== Object.keys(testCase.expected).length) {
      console.log(
        `FAILED: combineObjects(${testCase.input}) expected ${testCase.expected} but got ${actual}`
      );
      success = false;
    } else {
      for (let key in actual) {
        if (actual[key] !== testCase.expected[key]) {
          console.log(
            `FAILED: combineObjects(${testCase.input}) expected ${testCase.expected} but got ${actual}`
          );
          success = false;
        }
      }
    }
  }
  if (success) {
    console.log("SUCCESS: combineObjects passed all tests!");
  }
}

export function testReverseArr(func) {
  let reverseArrTests = [
    { input: [1, 2, 3], expected: [3, 2, 1] },
    { input: [1], expected: [1] },
    { input: [], expected: [] },
    { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
  ];

  let success = true;
  for (let testCase of reverseArrTests) {
    let actual = func(testCase.input);
    if (actual == undefined) {
      console.log(
        `FAILED: reverseArr(${testCase.input}) expected ${testCase.expected} but got undefined`
      );
      success = false;
      continue;
    }
    if (actual.length !== testCase.expected.length) {
      console.log(
        `FAILED: reverseArr(${testCase.input}) expected ${testCase.expected} but got ${actual}`
      );
      success = false;
    } else {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== testCase.expected[i]) {
          console.log(
            `FAILED: reverseArr(${testCase.input}) expected ${testCase.expected} but got ${actual}`
          );
          success = false;
        }
      }
    }
  }
  if (success) {
    console.log("SUCCESS: reverseArr passed all tests!");
  }
}
