import React from 'react';
import Day from './Day';
import classes from './Item.module.css';

export default function Item({ date, title, price }) {
    const day = new Date(date).toLocaleString('en-US', { day: '2-digit' });
    const month = new Date(date).toLocaleString('en-US', { month: 'long' });
    const year = new Date(date).toLocaleString('en-US', { year: 'numeric' });
    return (
        <div className={classes.container}>
            <Day day={day} month={month} year={year}></Day>
            <div className={classes.title}>{title}</div>
            <div className={classes.price}>₹{price}</div>
        </div>
    );
}