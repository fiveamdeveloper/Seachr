import React from "react";

function SearchResults(props) {

    console.log(props.data[0])

    return (

        props.data.map(searchResult => {
            return (

                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><a href={searchResult.url} target="_blank"> {searchResult.title} </a></div>
                        {searchResult.description}
                    </div>
                    <span className="badge bg-primary rounded-pill">Score: {searchResult.boost}</span>
                </li>

            )
        })
    )
}

export default SearchResults;