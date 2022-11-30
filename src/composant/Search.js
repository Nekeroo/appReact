import Fuse from "fuse.js"
import React, { useState } from 'react';

function SearchFuse({projects}) {

    const [results, setResults] = useState()

    if (!results || results.length === 0) setResults(projects.map((project) => {return {item: project}}))

    const fuse = new Fuse(projects, {
        keys: [
            'id',
            'name'
        ],
    })

    
    function onSearch({currentTarget}) {
        const res = fuse.search(currentTarget.value) 
        setResults(res)
    }
   
    return (
        <div>
          <input type="text" onChange={onSearch} placeholder="Enter a project name"></input>
          <h3 className="littleTitle">Nb of projects : {results ? results.length : projects.length}</h3>
          <ul className="ListProject">
          {results && results.map(({item}) => (
            <div>
                <li className="projectalone"><a href={"/issues/"+item.id}>{item.name}</a></li>
                <br/>
            </div>
            ))}
            </ul>
        </div>
    )
}

export default SearchFuse