import * as React from 'react';
import styles from './App.module.css';
import {DataList} from "./DataList";
import { useData } from "./hooks/data";

function App() {
  
  const data = useData();

  return <div className={styles.App}>
    <DataList data={data}></DataList>  
  </div>;
  
}

export default App;
