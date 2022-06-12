import DropDown from './DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategoryThunk, filterPrice } from '../../redux/actions/productsActions';
import { useState } from 'react';

const Filters = ({ handleClose }) => {

    const categories = useSelector(state => state.categories);

    const dispatch = useDispatch();
    const [ priceFrom, setPriceFrom ] = useState("");
    const [ priceTo, setPriceTo ] = useState("");

    const selectPrice = e => {
        e.preventDefault();
        dispatch(filterPrice({priceFrom, priceTo}))
    }

    const selectCategory = id => {
        handleClose();
        dispatch(filterCategoryThunk(id))
    }

    return (
        <div className='filters'>
            <DropDown header="Price" >
                <form className="price-filter" onSubmit={selectPrice}>
                    <label>
                        <span>From</span>
                        <input type="number" value={priceFrom} onChange={e => setPriceFrom(e.target.value)} />
                    </label>
                    <label>
                        <span>To</span>
                        <input type="number" value={priceTo} onChange={e => setPriceTo(e.target.value)} />
                    </label>
                    <button>
                        Filter price
                    </button>
                </form>
            </DropDown>
            <DropDown header="Category">
                <ul className='category-filter'>
                {
                    categories.map(category => (
                        <li key={category.id}>
                            <button onClick={() => selectCategory(category.id)}>
                                {category.name}
                            </button>
                        </li>
                    ))
                }
                </ul>
            </DropDown>
        </div>
    );
};

export default Filters;