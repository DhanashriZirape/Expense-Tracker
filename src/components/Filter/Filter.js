import React, { useState } from 'react';
import { FILTER_SELECTION_TEXT } from '../../Constants';
import classes from './Filter.module.css';

export default function Filter({ options, onFilterChange }) {
    const [filter, setFilter] = useState("");

    const _onFilterChange = (e) => {
        setFilter(e.target.value)
        onFilterChange(e.target.value)
    }

    const filterOptions = options.map(x => {
        return <option key={x} value={x}>{x}</option>
    })
    return (
        <select name="yearFilter" className={classes.filter} value={filter} onChange={_onFilterChange}>
            <option value={null}>{FILTER_SELECTION_TEXT}</option>
            {filterOptions}
        </select>
    );
}