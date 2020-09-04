import {useState, useEffect} from 'react';

const endpoint = 'https://api.teleport.org/api/urban_areas/';

export const useData = () => {

    const [data, setDate] = useState([]);
  
    useEffect(() => {
  
      const fetchDataAsync = async () => {
       
        const areas = await (await fetch(endpoint)).json();
  
        // TODO Batch these in sets of 5 appending to data to update view asap
        const data = await Promise.all(areas._links['ua:item'].map(async (item: any) => {
  
          const {_links: links} = await (await fetch(item.href)).json();
          const [scores, details] = await Promise.all([
            (await fetch(links['ua:scores'].href)).json(),
            (await fetch(links['ua:details'].href)).json()]
            );
  
          const population = details.categories.find((item: any) => item.id === "CITY-SIZE").data.find((item: any) => item.id === "POPULATION-SIZE").float_value;
          const scoreCategoryCount = scores.categories.length;
          const livingIndex = (scores.categories.reduce((acc: any, item: any) => acc + item.score_out_of_10, 0))/scoreCategoryCount;
          
          return {
            population,
            livingIndex,
            id: item.name
          }
        }));
  
        setDate(data as any);
     }
  
     fetchDataAsync();
    
    });
  
    return data;
  }