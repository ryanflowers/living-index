import * as React from 'react';
import './App.css';
import {DataList} from "./Component";
import { useData } from "./hooks/data";

function App() {
  
  const data = useData();

  return <DataList data={data}></DataList>;
}

export default App;
