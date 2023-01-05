import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./searchbar.css";

const SearchBar = () => {

    const [search,setSearch]=useState("");


    const handleSearchBtn=()=>{
      const searchField=  document.getElementById("search-field");
      const searchValue = searchField.value;
      console.log(searchValue)
      
    }
    const handleSearchField = (e)=>{
        const searchField= e.target.value;
        setSearch(searchField)
    }
    console.log(search)
    return (
        <div>
            <div className='search-bar' style={{display:"flex"}}>
                <input onChange={handleSearchField} id="search-field" type="text" placeholder="search product" />
                <button className='search-bar-btn' onClick={()=>handleSearchBtn()}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;