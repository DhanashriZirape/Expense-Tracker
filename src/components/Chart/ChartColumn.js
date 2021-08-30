import React from 'react';
import classes from './ChartColumn.module.css';
export default function ChartColumn({label,value}) {
    return (
        <div>
             <label>{label} Total expenditure: </label>
            <label>₹ {value}</label>
        </div>
    );
}