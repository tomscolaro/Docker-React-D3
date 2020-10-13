import React, { useRef, useEffect, useState } from "react";
import "./App.css";
//import { select } from "d3";
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);








function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red");
  }, [data]);

// function GetData(){
//   Promise data = [];
// };

  // return (
  //   <React.Fragment>
  //     <svg ref={svgRef}></svg>
  //     <br />
  //     <button onClick={() => setData(data.map(value => value + 5))}>
  //       Update data
  //     </button>
  //     <button onClick={() => setData(data.filter(value => value < 35))}>
  //       Filter data
  //     </button>
  //     <form>

  //   </form>

  //   </React.Fragment>
  
  //);
//}

export default App;