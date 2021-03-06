import React, { useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input 
                    className="input" 
                    onChange={e => setTerm(e.target.value)}
                    value={term}
                />
            </div>
        </div>    
    );
}

export default Search;