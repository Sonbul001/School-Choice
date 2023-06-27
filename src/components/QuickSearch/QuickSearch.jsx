import React from 'react';
import './QuickSearch.css';
import searchLogo from '../../assets/search-logo.png';
export default function QuickSearch() {
    return (
        <div className='quick-search-bar'>
            <div className='quick-search-bar-circle'>
                <span className="circle-text">Schools Search</span>
            </div>
            <form className="quick-search-form">

                <div className='quick-search--content'>
                    <label>School Name</label>
                    <input type="text" placeholder="School name" className="quick-search-input" />
                </div>

                <div className='quick-search--content'>
                    <label>City</label>
                    <input type="text" placeholder="City" className="quick-search-input" />
                </div>

                <div className='quick-search--content'>
                    <label>Gender</label>
                    <div>
                        <label>
                            <input type="radio" name="gender" value="" className="quick-search-input-radio" />
                            All
                        </label>
                        <label>
                            <input type="radio" name="gender" value="boys" className="quick-search-input-radio" />
                            Boys
                        </label>
                        <label>
                            <input type="radio" name="gender" value="girls" className="quick-search-input-radio" />
                            Girls
                        </label>
                    </div>

                </div>

                <div className='quick-search--content'>
                    <label>School Type</label>
                    <div>
                        <label>
                            <input type="radio" name="schoolType" value="" className="quick-search-input-radio" />
                            All
                        </label>
                        <label>
                            <input type="radio" name="schoolType" value="local" className="quick-search-input-radio" />
                            Local
                        </label>
                        <label>
                            <input type="radio" name="schoolType" value="international" className="quick-search-input-radio" />
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