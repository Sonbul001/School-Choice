import React from 'react';
import './QuickSearch.css';
import searchLogo from '../../assets/search-logo.png';
import { useState } from 'react';
export default function QuickSearch(props) {
    const filter = {
        city: '',
        gender: '',
        type: [],
        name: ''
    };
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        filter.name = name;
        filter.city = city;
        filter.type = type;
        filter.gender = gender;
        const url = `http://localhost:3000/schools/filter-featured`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filter)
        })
            .then(response => response.json())
            .then(data => props.schools(data))
            .catch(err => console.error(err))
    }


    return (
        <div className='quick-search-bar'>
            <div className='quick-search-bar-circle'>
                <span className="circle-text">Schools Search</span>
            </div>
            <form className="quick-search-form" onSubmit={(event) => handleSubmit(event)}>

                <div className='quick-search--content'>
                    <label>School Name</label>
                    <input type="text" placeholder="School name" className="quick-search-input" value={name} onChange={(event) => setName(event.target.value)} />
                </div>

                <div className='quick-search--content'>
                    <label>City</label>
                    <input type="text" placeholder="City" className="quick-search-input" value={city} onChange={(event) => setCity(event.target.value)} />
                </div>

                <div className='quick-search--content'>
                    <label>Gender</label>
                    <div>
                        <label>
                            <input type="radio" name="gender" value="mixed" className="quick-search-input-radio"
                                checked={gender === 'mixed'}
                                onChange={(event) => setGender(event.target.value)}
                            />
                            All
                        </label>
                        <label>
                            <input type="radio" name="gender" value="boys" className="quick-search-input-radio"
                                checked={gender === 'boys'}
                                onChange={(event) => setGender(event.target.value)}
                            />
                            Boys
                        </label>
                        <label>
                            <input type="radio" name="gender" value="girls" className="quick-search-input-radio"
                                checked={gender === 'girls'}
                                onChange={(event) => setGender(event.target.value)}
                            />
                            Girls
                        </label>
                    </div>
                </div>

                <div className='quick-search--content'>
                    <label>School Type</label>
                    <div>
                        <label>
                            <input type="radio" name="schoolType" value="" className="quick-search-input-radio"
                                checked={type === ''}
                                onChange={(event) => setType(event.target.value)}
                            />
                            All
                        </label>
                        <label>
                            <input type="radio" name="schoolType" value="National" className="quick-search-input-radio"
                                checked={type === 'National'}
                                onChange={(event) => setType(event.target.value)}
                            />
                            National
                        </label>
                        <label>
                            <input type="radio" name="schoolType" value="International" className="quick-search-input-radio"
                                checked={type === 'International'}
                                onChange={(event) => setType(event.target.value)}
                            />
                            International
                        </label>
                    </div>

                </div>
                <div className='quick-search-button-div'>
                    <img src={searchLogo} alt="Search Logo" />
                    <button type="submit" className="quick-search-button">Search Now</button>
                </div>

            </form>
        </div>
    );
}