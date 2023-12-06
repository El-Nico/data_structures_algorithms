import logo from "./logo.svg";
import "./App.css";

function App() {
  const strings = ["a", "b", "c", "d"];

  // strings[2];

  //push
  strings.push("e"); //o(1)--constant time

  //pop
  strings.pop();
  strings.pop(); //o(1) constant time

  //unshift
  strings.unshift("x"); //add x at beginning of array//o(n)
  //because it shifts all elements by one index to make space at start of array for 'x'

  //splice add to middle of array
  strings.splice(2, 0, "alien");
  // add 'alien' at index 2 delete nothing
  //unshifts from the 2 position so 0(n)

  //dynamic array append can be o(n) because it lloops over the array coppys it all to new allocation and append the next item

  ///how to buld and array and how to use it

  console.log(strings);

  //IN INTERVIEWS TREAT ANY STRING QUESTION AS AN ARRAY***
  //reverse string excercise
  //'hi my name is iman ghadzi'
  //should be//'izdahg nami si eman ym ih'

  function reverse(str) {
    // return str.map((_, index, arr) => arr[arr.length - 1 - index]);
    return Array.from(str)
      .map((_, index, arr) => arr[arr.length - 1 - index])
      .join("");
    return Array.from(str)
      .reduce((prev, curr) => [curr, ...prev], [])
      .join("");
  }

  console.log(reverse("hi my name is iman ghadzi"));

  //pro solution
  function reverse2(str) {
    //check for correctness of input first
    if (!str || str.length < 2 || typeof str !== "string") {
      return "boi stop playing";
    }

    const backwards = [];
    const length = str.length - 1;
    for (let i = length; i >= 0; i--) {
      backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join("");
  }

  function reverse3(str) {
    return str.split("").reverse().join("");
  }

  //es6
  const reverse4 = (str) => [...str].reverse().join("");

  reverse2("hi my name is iman ghadzi");
  console.log(reverse3("hi my name is iman ghadzi"));
  console.log(reverse4("hi my name is iman ghadzi"));

  ///EXCERCIS 2 MERGE 2 SORTED ARRAYS
  //[0 3 4 31], [4 6 30]
  //should retun// [0 3 4 4 6 30 31]
  const mergeSortedArrays = (arr1, arr2) =>
    [...arr1, ...arr2].sort((a, b) => a - b);

  console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

  //pro solution
  function mergeSortedArrays2(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //CHECK INPUTS// also check empty array
    //pause every once in a while log out your answers
    if (array1.length == 0) {
      return array2;
    }
    if (array2.length === 0) {
      return array1;
    }

    //this check SHOUBLD BE ABSTRACTED TO ANOTHER FUNCTION TO SHOW READABILITY
    while (array1Item || array2Item) {
      if (!array2Item || array1Item < array2Item) {
        mergedArray.push(array1Item);
        array1Item = array1[i];
        i++;
      } else {
        mergedArray.push(array2Item);
        array2Item = array2[j];
        j++;
      }
    }
  }
  return <div className="App"></div>;
}

export default App;
