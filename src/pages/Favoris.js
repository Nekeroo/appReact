import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const Favoris = () => {
    const store = useSelector(state =>  state.projects)

    useEffect(()=>{
        {console.log(store)}
    }, [store])
    return (
            <div className="favoris">
                {store &&
                    store.map(t=>(
                        <p>{t.payload}</p>
                    ))
                }
            </div>
    );
};

export default Favoris;