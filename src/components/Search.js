import React, { useState } from 'react'

const Search = ({ getQuery }) => {

    const [text, setText] = useState('');

    const handleChange = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <div className='search'>
            <form>
                <input type="text"
                    className='form-control'
                    placeholder='Search Characters...'
                    value={text}
                    onChange={(e) => handleChange(e.target.value)}
                    autoFocus
                />
            </form>
        </div>
    )
}

export default Search
