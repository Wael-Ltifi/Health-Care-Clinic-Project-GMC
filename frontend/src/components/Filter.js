import React from 'react'

function Filter({ handelFilter, type , by }) {
    return (
        <div className='d-inline-flex p-2 m-2  text-center'>
            <h6 className='d-inline-flex p-1 m-1  text-center'>Search by {by}</h6>
            <input className="form-control" type={type} onChange={(e) => handelFilter(e.target.value)} />
        </div>
    )
}

export default Filter