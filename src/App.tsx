import * as React from 'react';
import styles from './App.module.css';
import {DataList} from "./DataList";
import {Header} from "./Header";
import { useData } from "./hooks/data";
import * as d3 from 'd3';

function App() {
  
  const data = useData();

  React.useEffect(() => {
    d3.selectAll("svg#container")
    .selectAll('.container-nodes') // No idea why I need this but wont render without??
    .data(data)
    .enter()
    .append("circle")
    .attr("cy", (d: any) => d.livingIndex * 100)
    .attr("cx", (d: any) => d.population * 50)
    .attr("stroke", "green")
    .attr("fill", "yellow")
    .attr("stroke-width", 4)
    .attr("r", 2);
  }, [data.length])

  return <div className={styles.App}>
    <Header></Header>
    <svg id="container" className={styles.chart}>
    </svg>

    {/* <DataList data={data}></DataList>   */}
  </div>;
  
}

export default App;
