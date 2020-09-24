import React, {useRef, useEffect} from 'react';
import logo from './logo.svg';
import * as d3 from "d3";
import './App.css';

const data = [25,35,45,69,12]

function App() {
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("circle").data(data)
  }, [])

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
    </React.Fragment>

  );
}

export default App;
