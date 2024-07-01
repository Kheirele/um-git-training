import React from 'react';
import './App.css';

function NoteWrapper({ todo }) {
    return (
        <div className='todo'>
            <p>{todo}</p>
        </div>
    )
}

export default NoteWrapper;