import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterNameThunk } from '../../redux/actions/productsActions';
import Filters from './Filters';

const SearchBox = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const [ search, setSearch ] = useState("");

    const dispatch = useDispatch();

    const handleSearch = e => {
        e.preventDefault();
        dispatch(filterNameThunk(search));
    }

    return (
        <div className='search-box'>
            <form className="input" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button>
                    <i className="icon-search"></i>
                </button>
            </form>
            <button 
                className='filter-button' 
                onClick={() => setIsOpen(!isOpen)}
                style={{color: isOpen ? 'var(--primary)' : ''}}
            >
                <i className="icon-filter"></i>
                Filters
            </button>
            <div className={`filters-modal ${isOpen ? 'open' : ''}`}>
                <button className='close' onClick={() => setIsOpen(false)}>
                    <i className="icon-x"></i>
                </button>
                <h5>Filters</h5>
                <Filters handleClose={() => setIsOpen(!isOpen)} />
            </div>
            {
                isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>
            }
        </div>
    );
};

export default SearchBox;