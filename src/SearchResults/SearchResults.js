import React from "react";

function SearchResults(props) {

    //console.log(props.data[0])

    const searchResult = props.data
    //console.log("props", searchResult)

    if (props.data.length !== 0) {
        return (
            searchResult[0].response.docs.map(searchResult => {
                //console.log(searchResult)
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-start" key={searchResult.id}>
                        <div className="col-10 ms-2 me-auto">
                            <div className="col-auto fw-bold"><a href={searchResult.url} target="_blank"> {searchResult.title} </a></div>
                            <div>
                                {searchResult.description_str}
                                <p className="text-success longUrl">{searchResult.url}</p>
                            </div>
                        </div>
                        <span className="badge bg-primary rounded-pill">Score: {parseFloat(searchResult.boost).toFixed(3)}</span>
                    </li>
                )
            })
        )
    }
}

export default SearchResults;