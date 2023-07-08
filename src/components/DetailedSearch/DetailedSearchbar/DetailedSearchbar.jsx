
import React, { useState } from 'react'
import './DetailedSearchbar.css';

function DetailedSearchBar(props) {
    const [name, setName] = useState('');
    const [sort, setSort] = useState('');

    const handleSortChange = (event) => {
        setSort(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.filter({ name, sort });
    }

    return (
        <div className='detailed--search--bar'>
            <form className='detailed--search--form' role="search" onSubmit={handleSubmit}>
                <input className='detailed--search--input' id="search" type="search" placeholder="School Name" autofocus value={name} onChange={(event) => setName(event.target.value)}/>
                <button className='detailed--search--submit' type="submit">Go</button>
                <select className='detailed--search--sort' placeholder='Sort' value={sort} onChange={handleSortChange}>
                    <option disabled selected hidden value=''>Sort by...</option>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </select>
            </form>

        </div>
    )
}

export default DetailedSearchBar