
import React from 'react'
import './DetailedSearchbar.css';

function DetailedSearchBar() {
    return (
        <div className='detailed--search--bar'>
            <form className='detailed--search--form' role="search">
                <input className='detailed--search--input' id="search" type="search" placeholder="School Name" autofocus required />
                <button className='detailed--search--submit' type="submit">Go</button>
            </form>
            <form className='detailed--search--sort--form' role="search">
                <select className='detailed--search--sort' placeholder='Sort'>
                    <option value="" disabled selected hidden>Sort by...</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
            </form>

        </div>
    )
}

export default DetailedSearchBar