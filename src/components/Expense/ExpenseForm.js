import React, { useState } from 'react';
import classes from './ExpenseForm.module.css';

export default function ExpenseForm({ onCancelClick, addItem }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const onAmountChange = (e) => {
        setAmount(e.target.value);
    }
    const onDateChange = (e) => {
        setDate(e.target.value);
    }
    const reset = (e) => {
        setTitle("");
        setAmount("");
        setDate("");
    }
    const addExpense = (e) => {
        e.preventDefault();
        addItem({ id: Math.random(), title, amount, date });
        reset();
    }
    const maxDate = new Date().toISOString().split("T")[0];
    return (
        <form >
            <div className={classes.container}>
                <label htmlFor="title">Title</label>
                <input type="text"
                    placeholder="Enter expense name here"
                    name="title"
                    value={title} required
                    onChange={onTitleChange} autoComplete="off"></input>
                <label htmlFor="amount">Amount</label>
                <input type="number" placeholder="Enter amount here"
                    name="amount" value={amount}
                    required min="1"
                    onChange={onAmountChange} autoComplete="off"></input>
                <label htmlFor="date">Date</label>
                <input type="date"
                    name="date"
                    value={date}
                    max={maxDate}
                    required onChange={onDateChange}></input>
            </div>
            <div className={classes.buttonContainer}>
                <input type="submit" value="Submit" onClick={addExpense}></input>
                <input type="reset" value="Reset" onClick={reset}></input>
                <button type="button" onClick={onCancelClick}> Close</button>
            </div>

        </form>
    );
}