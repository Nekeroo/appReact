import Fuse from "fuse.js"
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Button } from "react-bulma-components";
import {addFavoris} from "../store/features/projectSlice"

function SearchFuse({projects}) {

    const [results, setResults] = useState()

    const dispatch = useDispatch()

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
                <Button variant="containes" onClick={() => {
                    dispatch(addFavoris(item.name))
                }} >Add Favoris</Button>
                <br/>
            </div>
            ))}
            </ul>
        </div>
    )
}

export default SearchFuse