import React from 'react';
import { FILTER_SELECTION_TEXT } from '../../Constants';
import Chart from '../Chart/Chart';
import Item from './Item';
import classes from './List.module.css';

export default function List({ items, yearFilter }) {

    let filteredItems = [...items];
    if (yearFilter && yearFilter !== FILTER_SELECTION_TEXT) {
        const data = items.filter(x => new Date(x.date).getFullYear().toString() === yearFilter);
        filteredItems = [...data];
    }

    const allItems = filteredItems.map(x => {
        return <Item key={x.id} date={x.date} title={x.title} price={x.amount}></Item>
    });

    const chartData = [];

   // const callback = (prev, current) => prev + current; 

    for (let index = 0; index < filteredItems.length; index++) {
        const element = filteredItems[index];
        const month = new Date(element.date).toDateString().split(" ")[1];
        if ((chartData.length > 0 && !chartData.find(x => x.label === month)) || chartData.length === 0) {
            const monthItems = filteredItems.filter(x => new Date(element.date).toDateString().split(" ")[1] === month);
            let data = 0;
           for(let j=0;j<monthItems.length;j++){
            data+=monthItems[j].amount;
           }

            chartData.push({
                label: month,
                data: data
            })
        }
    }

    return (
        <div className={classes.container}>
            {/* <Chart dataPoints={chartData}></Chart> */}
            {allItems}
        </div>
    )
}