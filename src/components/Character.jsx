function Character({ character }) {

    return (

        <>
            <div className="card text-bg-dark m-2">
                <img src={character.image} alt={character.name} className="card-img" style={{ filter: 'blur(0.7rem)', height: '150px'}} />
                <div className="card-img-overlay">

                    <div className="card text-bg-dark mb-3">
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                <img src={character.image} alt={character.name} className="img-fluid rounded-start" style={{ height: '110px' }} />
                            </div>
                            <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                                <div className="card-body p-0 pt-2 px-1">
                                    <h5 className="card-title">{character.name} </h5>
                                    <p>{character.origin.name}</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Character