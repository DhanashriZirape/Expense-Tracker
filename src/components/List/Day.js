import React from 'react';
import classes from './Day.module.css';

export default function Day({day,month,year}) {
    return (
        <div className={classes.container}>
            <label className={classes.month}>{month}</label>
            <label className={classes.year}>{year}</label>
            <label className={classes.day}>{day}</label>
           
        </div>
    );
}