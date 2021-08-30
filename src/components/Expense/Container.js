import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import classes from './Container.module.css';
import Filter from '../Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import List from '../List/List';
import 'react-toastify/dist/ReactToastify.css';

const dummy_list = [{
    id: Math.random(), title: 'Book', amount: 2000, date: '2020-02-25'
}, {
    id: Math.random(), title: 'Notebook', amount: 150, date: '2019-02-23'
}, {
    id: Math.random(), title: 'Pen', amount: 20, date: '2019-02-23'
}]

export default function Container() {
    const [showForm, setShowForm] = useState(false);
    const [yearOptions, setYearOptions] = useState([]);
    const [items, setItems] = useState(dummy_list);
    const [yearFilter, setFilter] = useState(null);

    const addItem = (item) => {
        setItems([...items, item]);
        toast.success('Added the expense');
    }
    const _onFilterChange = (value) => {
        setFilter(value);
    }
    const onAddExpense = () => {
        setShowForm(true);
    }
    const onCancelClick = () => {
        setShowForm(false);
    }
    useEffect(() => {
        const years = [];
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            const year = new Date(element.date).getFullYear().toString();
            if ((years?.length > 0 && !years.find(x => x === year)) || years.length === 0) {
                years.push(year)
            }
        }
        setYearOptions([...years]);

    }, [items]);

    return (
        <>
            <ToastContainer></ToastContainer>
            {!showForm ? <div className={classes.container}>
                <button type="button" onClick={onAddExpense} className={classes.button}>Add Expense</button>
                {yearOptions?.length > 0 ?
                    <Filter options={yearOptions} onFilterChange={_onFilterChange}></Filter>
                    : null}
            </div> : null}
            {showForm ? <ExpenseForm onCancelClick={onCancelClick} addItem={addItem}></ExpenseForm> : null}
            <List items={items} yearFilter={yearFilter}></List>
        </>
    )
}