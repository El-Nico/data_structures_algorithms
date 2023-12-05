import "./App.css";
import { useEffect, useReducer, useState, useRef } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "highlight.js/styles/base16/woodland.css";

// import "highlight.js/styles/github.css";
// Using ES6 import syntax
import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";

// Then register the languages you need
// hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

// const highlightedCode = hljs.highlight("<span>Hello World!</span>", {
//   language: "xml",
// }).value;

function App() {
  const exponentialTime = function () {};
  const factorialTime = function () {};
  //variables & data
  const nemo = ["nemo"];
  const everyone = [
    "dory",
    "bruce",
    "marlin",
    "nemo",
    "gill",
    "bloat",
    "nigel",
    "squirt",
    "darla",
    "hank",
  ];
  const large = new Array(10000).fill("nemo");
  const boxes = [0, 1, 2, 3, 4, 5];

  //O(n)
  function findNemo(array) {
    let t0 = performance.now();

    for (let i = 0; i < array.length; i++) {
      if (array[i] === "nemo");
      {
        console.log("found nemo!");
      }
    }

    let t1 = performance.now();
    console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
  }

  //O(n)
  const [ltData, setLtData] = useState([
    {
      operational_time: 0,
      operational_steps: 0,
    },
  ]);
  const [lt_interval_id, set_lt_interval_id] = useState(null);
  const linearTime = function () {};

  const [ctData, setCtData] = useState([
    { operation_steps: 0, operation_time: 0, n: 0, text_output: "" },
  ]);
  const [ct_interval_id, set_ct_interval_id] = useState(0);
  // let t;
  //O(1) -- constant time
  const constantTime = function () {
    //data
    let n = 1;

    // let data = ["nemo1", "nemo2", "nemo3", "nemo4", "nemo5", "nemo6"];
    //every 1 second
    let t = setInterval(function () {
      let operation_steps = 0;
      let t0 = performance.now();
      const data = Array.from({ length: n + 10000 }, (_, i) => "nemo" + i);
      operation_steps++;
      const operation = data.slice(0, n).join(",");
      operation_steps++;
      let t1 = performance.now();
      // console.log(operation, t1 - t0);
      const operation_time = t1 - t0;
      const text_output = operation + operation_time + "ms";
      // console.log(text_output);
      setCtData((curr) => [
        ...curr,
        {
          operation_steps,
          n,
          operation_time,
          text_output,
        },
      ]);
      console.log(ctData);
      n++;
    }, 1000);
    //create data
    //run and time opration
    //update graph
    set_ct_interval_id(t);
  };

  // What is the Big O of the below function? (Hint, you may want to go line by line)
  function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) {
      //O(n)
      // anotherFunction(); //O(n)
      let stranger = true; //O(n)
      a++; //O(1)
    }
    return a; //O(1)
  }
  // ans 3+n+n+n+n~BIG O(3+4n)~further simplified to just O(n)

  // What is the Big O of the below function? (Hint, you may want to go line by line)
  function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1; //O(n)
      let y = i + 2; //O(n)
      let z = i + 3; //O(n)
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2; //O(n)
      let q = j * 2; //O(n)
    }
    let whoAmI = "I don't know"; //O(1)
  }
  //O(n²)--nope apparently// Big O(4 +5n)

  useEffect(() => {
    findNemo(large); //O(n) --> Linear Time
  }, []);

  function mainOperationStart() {
    // console.log("main operation started");
    constantTime();
    linearTime();
    exponentialTime();
    factorialTime();
  }
  const data = ctData;

  const renderLineChart = (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line
        type="monotone"
        dataKey="operation_time"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="operation_steps" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="n" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  const codeRef = useRef(null);
  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);
  return (
    <div className="App">
      <div className="menu-bar">
        <div className="buttons">
          <button onClick={mainOperationStart}>Start All</button>
          <button onClick={mainOperationStart}>Pause All</button>
          <button
            onClick={() => {
              console.log(ct_interval_id);
              clearInterval(ct_interval_id);
              console.log("ran");
            }}
          >
            Reset All
          </button>
        </div>
      </div>

      <main>
        <div className="complexities-container">
          <div className="complexity constant-time">
            <div className="graph">{renderLineChart}</div>
            <div className="function-snippet">function-snippet</div>
            <div className="output">output</div>
          </div>
          <div className="complexity linear-time">
            <div className="graph">{renderLineChart}</div>
            <div className="function-snippet">
              <pre>
                <code className="typescript" ref={codeRef}>
                  {`function findNemo(array) {
                  let t0 = performance.now();

                  for (let i = 0; i < array.length; i++) {
                    if (array[i] === "nemo");
                    {
                      console.log("found nemo!");
                    }
                  }

                  let t1 = performance.now();
                  console.log(
                    "Call to find Nemo took " + (t1 - t0) + " milliseconds"
                  );
                }`}
                  {`
export function useWeb3AnalyticsReporter() {
  const { pathname, search } = useLocation(); //depends on project routes manager 
  const { provider } = useWeb3React(); //depends on project web3 providers handling

  //track page-views
  useEffect(() => {
    Web3Analytics.trackPageView(pathname, search);
  }, [pathname, search]);

  //track web3 activity
  useEffect(() => {
    if (provider) {
      Web3Analytics.walletProvider(provider);
    }
  }, [provider]);
}`}
                </code>
              </pre>
            </div>
            <div className="output">output</div>
            <div className="control-bar">
              <div className="buttons">
                <button>start</button>
                <button>pause</button>
                <button>reset</button>
              </div>
            </div>
          </div>
          <div className="complexity exponential-time"></div>
          <div className="complexity factorial-time"></div>
        </div>
      </main>
      <footer>
        {" "}
        <p>
          copyright &copy; 2023{" "}
          <a href="https://nicholas-eruba.com/home" target="_blank">
            Nicholas Chibuike-Eruba
          </a>
          &nbsp; All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
