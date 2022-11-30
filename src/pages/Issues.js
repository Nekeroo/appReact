import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { useParams } from "react-router-dom";

function Issues() {
    const [issues, setIssues] = useState([])
    
    let {id} = useParams()
    /* allows us to perform side effects in your components */
    useEffect(() => {
        if (id) fetch('https://framagit.org/api/v4/projects/' +  id  + '/issues?membership=true', {
            method: 'get',
            headers: new Headers({
                'PRIVATE-TOKEN' : 'glpat-auESVMAxA27xgNFpu11w',
                'Accept' : 'application/json'
            })
        })
            .then((response) => response.json())
            .then((data) => setIssues(data))
    });

    const fuse = new Fuse(issues);
    //https://www.apprendre-react.fr/tutorial/library/flux/redux-from-scratch/
    //https://codesandbox.io/s/react-redux-bookmark-app-forked-v4vb6c?file=/src/reducers/index.js
    // Liens pour implémenter Redux
    return (
        //Affichage des Issuses par rapport au projet sélectionné.
        <div className='issues'>
            <h1 className="title">Issues</h1>
            <h3 className="littleTitle">Number of issues : {(fuse.getIndex().size() > 0) ? fuse.getIndex().size() : 0}</h3>
            <ul>
                {Array.isArray(issues) && issues.map(item => (
                <div>
                    <li className="issuealone"><a href={item.web_url}>{item.title}</a></li>
                    <br/>
                </div>
                ))}
                </ul>
        </div>
    )
}

export default Issues;
