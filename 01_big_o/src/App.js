import "./App.css";
import { useEffect, useReducer, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function App() {
  const linearTime = function () {};
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

  //O(1) -- constant time
  function logFirstNBoxes(boxes) {
    console.log(boxes[0]);
    console.log(boxes[1]);
  }

  function reducer(state, action) {
    switch (action.type) {
      case "ct_set_po": {
        return { ...state, ct_performance_output: action.payload };
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    ct_performance_output: 0,
  });

  const [ctData, setCtData] = useState([
    { operational_steps: 0, deltaT: 0, n: 0, text_output: "" },
  ]);
  const [ct_interval_id, set_ct_interval_id] = useState(0);
  // let t;
  const constantTime = function () {
    //data
    let n = 1;

    // let data = ["nemo1", "nemo2", "nemo3", "nemo4", "nemo5", "nemo6"];
    //every 1 second
    let t = setInterval(function () {
      let operational_steps = 0;
      let t0 = performance.now();
      const data = Array.from({ length: n + 10000 }, (_, i) => "nemo" + i);
      operational_steps++;
      const operation = data.slice(0, n).join(",");
      operational_steps++;
      let t1 = performance.now();
      // console.log(operation, t1 - t0);
      const deltaT = t1 - t0;
      const text_output = operation + deltaT + "ms";
      // console.log(text_output);
      setCtData((curr) => [
        ...curr,
        {
          operational_steps,
          n,
          deltaT,
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
    logFirstNBoxes(boxes); //O(2)--> constant time
  }, []);

  function mainOperationStart() {
    // console.log("main operation started");
    constantTime();
    linearTime();
    exponentialTime();
    factorialTime();
  }
  const data = ctData;
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];
  const renderLineChart = (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line
        type="monotone"
        dataKey="deltaT"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="operational_steps" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="n" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  return (
    <div className="App">
      <button onClick={mainOperationStart}>Start</button>
      <button
        onClick={() => {
          console.log(ct_interval_id);
          clearInterval(ct_interval_id);
          console.log("ran");
        }}
      >
        Reset
      </button>
      <div className="complexities-container">
        <div className="complexity constant-time">
          <div className="graph">{renderLineChart}</div>
          <div className="function-snippet">function-snippet</div>
          <div className="output">output</div>
        </div>
        <div className="complexity linear-time"></div>
        <div className="complexity exponential-time"></div>
        <div className="complexity factorial-time"></div>
      </div>
    </div>
  );
}

export default App;
