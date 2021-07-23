import React from 'react'

function MainContent(props) {
    return (
        <main style={{backgroundColor:"orange"}}>
            <center>
            <div className="dog-ask">
                <form className="dog-form" onSubmit={props.HandleSearch}>
                    {/* <input type="search" required placeholder="Eg.Afrian" value={props.search} onChange={e => props.setSearch(e.target.value)} />
                     */}
                     <button>Tap to Change!</button>
                </form>
            </div>
            <div className="dog-img" >
                <figure>
                    <img src={props.url}/>
                </figure>
            
        </div>

            </center>
        </main>
    )
}

export default MainContent
