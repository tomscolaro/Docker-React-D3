import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { select } from "d3";

function App() {


  const [data, setData] = useState([25, 30, 45, 60, 20]);

  if (saved_data.length > 0) {
    callback(null, parse(variable, saved_data)); 
  }
  else {
  // -------------- Begin Request New Data ------------------
    d3.json(" ... ", 
        function(data) {
          if (!data) return callback(new Error("unable to load data"));   
          saved_data = data; 
          // Put it here.
          callback(null, parse(variable, saved_data));
        });
  } 




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







  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
    </React.Fragment>
  );
}

export default App;