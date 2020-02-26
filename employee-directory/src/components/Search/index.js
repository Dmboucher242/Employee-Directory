import React from "react";
import "./style.css";

function Search() {
    return(
    <>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn my-2 my-sm-0" type="submit">Search</button>
        </form>
    </>
    )
}
                
export default Search;