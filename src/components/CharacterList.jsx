import { useState, useEffect } from 'react'
import Character from './Character'

function NavPage(props) {

    const startNumber = 1;
    const endNumber = props.info.pages;
  
    const options = [];
    for (let i = startNumber; i <= endNumber; i++) {
      options.push(
        <option key={i} value={i}>{i}</option> 
        );
    }

    return (
        <div className='d-flex justify-content-around'>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={() => (
                    (props.page > 1) ? props.setPage(props.page - 1) : props.setPage(props.page)
                )}>
                    {
                        (props.page == 1) ?
                            (" - ")
                            :
                            ("< Página " + (props.page - 1))
                    }</button> 
                <div className="btn btn-outline-primary text-white d-flex align-items-center">
                    Página Actual - 
                    <select name="sc" id="sc" className="btn btn-dark text-white py-0" 
                    value={props.page} onChange={() => (
                        props.setPage(parseInt(event.target.value))
                    )}> 
                        {options}
                    </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => (
                    (props.page < props.info.pages) ? props.setPage(props.page + 1) : props.setPage(props.page)
                )}>
                    { 
                    (props.page == props.info.pages) ?
                    (" - ")
                    :
                    ("Página " + (props.page + 1) + " >")
                    }</button>
            </div>
        </div>
    )
}

function CharacterList() {
    const [info, setInfo] = useState([]);
    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://rickandmortyapi.com/api/character?page=" + page);
            const data = await response.json();
            setCharacter(data.results);
            setInfo(data.info);
            setLoading(false)
        }

        getData()

    }, [page]);



    if (loading) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <>
            <div className='container'>
                <NavPage page={page} setPage={setPage} info={info} />
                <hr />
                {
                    loading ? (
                        <h1>Loading ...</h1>
                    ) : (
                        <div className='row'>
                            {
                                characters.map(character => {
                                    return (
                                        <div className='col-sm-12 col-md-6 col-lg-4' key={character.id}>
                                            <div className='p-1'>
                                                <Character character={character} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                <hr />
                <NavPage page={page} setPage={setPage} info={info} />
            </div>
        </>
    )
}

export default CharacterList