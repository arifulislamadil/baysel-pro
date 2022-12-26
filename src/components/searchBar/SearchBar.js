import React from 'react';
import "./searchbar.css";

const SearchBar = () => {

    const handleSearchBtn=()=>{
      const searchField=  document.getElementById("search-field");
      const searchValue = searchField.value;
      console.log(searchValue)
      
    }
    return (
        <div>
            <div className='search-bar' style={{display:"flex"}}>
                <input id="search-field" style={{width: "100%"}} type="text" placeholder="search product" />
                <button onClick={()=>handleSearchBtn()}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;