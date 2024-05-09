import React from 'react'

const PeopIn = ({people, setPeople}) => {
    return (
        <>
            <h2>Number of People</h2>
            <label htmlFor="input-people">
                <input id="input-people" className="input-people" type="number" value={people} min="1" onChange={(e)=>setPeople(e.target.value)}
                />
            </label>
        </>
    )
}

export default PeopIn