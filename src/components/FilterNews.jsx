import {IoSearchCircleSharp} from 'react-icons/io5'
const Filter = ({handleChange}) => {
    const CATEGORIES = ['general', 'business', 'entertainment', 
                        'health', 'science', 'sports', 'technology',
                         'crona virus'];
    return ( 
        <div className = "filter">
        <select name="sortBy" onChange={(e)=>handleChange(e.target)} id="sort">
            <option value="latest">Latest</option>
            <option value="popularity">Most Popular</option>
        </select>
        <select name="category" onChange={(e)=>handleChange(e.target)} id="category">
    {CATEGORIES.map((category,i)=>(<option key = {i}>{category}</option>))}
        </select>
        <div className="search">
            <input type="text" name="query" id="search" 
            onChange={(e)=>handleChange(e.target)}/>
            <label htmlFor="search">
                <IoSearchCircleSharp className ="search-icon"/>
            </label>
        </div>
        </div>

     );
}
 
export default Filter;