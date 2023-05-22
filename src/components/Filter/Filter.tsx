import React from 'react';

type FilterComponentProps = {
    handleChange: (e: any) => void;
}

const Filter = ({ handleChange }: FilterComponentProps) => {
    return (
        <>
            <label htmlFor="filter">Filter the list:</label>
            <input type="text" name="filter" onChange={(e) => handleChange(e)}/>
        </>
    )
};

export default Filter;