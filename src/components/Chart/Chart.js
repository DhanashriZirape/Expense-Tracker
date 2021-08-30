import React from 'react';
import classes from './Chart.module.css';
import ChartColumn from './ChartColumn';

export default function Chart({dataPoints}) {
    const items = dataPoints.map(x=>{
        return <ChartColumn label={x.label} value={x.data}></ChartColumn>
    })
    return (<>
    {items}
    </>)
}