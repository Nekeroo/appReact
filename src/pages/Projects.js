import SearchFuse from '../composant/Search';
// import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';



function Projects() {

  // const projects = useSelector(state => console.log(state))

  const [projects, setProjects] = useState([])

  /* allows us to perform side effects in your components */
  useEffect(() => {
    fetch('https://framagit.org/api/v4/projects?membership=true', {
      method: 'get',
      headers: new Headers({
        'PRIVATE-TOKEN' : 'glpat-auESVMAxA27xgNFpu11w',
        'Accept' : 'application/json'
      })
    })
    .then((response) => response.json())
    .then((data) => setProjects(data))
  },[]);

  return(
    <div className='projects'>
        <h1 className="title">Projects from Nekeroo</h1>
        {/* {Array.isArray(projects) && projects.map(item => (
          <div>
            <a href={"/issues/"+item.id}>{item.name}</a>
            <br></br>
          </div>
        ))} */}
        {projects.length > 0 && <SearchFuse projects={projects}/>}
    </div>
  )
}

export default Projects;