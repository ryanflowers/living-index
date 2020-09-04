import * as React from 'react';
import styles from './DataList.module.css'

export const DataList = ({data}: any) => {
    return data.map((item: any) => 
                <div className={styles.container} key={item.id}>
                    <span>Area: {item.id}</span>
                    <span>Population: {item.population}</span>
                    <span>LivingIndex: {item.livingIndex}</span>
                </div>
            )
}