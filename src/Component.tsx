import * as React from 'react';

import styles from './Component.module.css'

export const DataList = ({data}: any) => {
    return <div className={styles.test}>
        { 
            data.map((item: any) => 
                <div>
                    <span>Population: {item.population}</span>
                    <span>LivingIndex: {item.population}</span>
                </div>
            )
        }
  </div>
}