import React from 'react';

function Story({story, restart}){
    return (
        <>
            <p className='Story-p'>{story}</p>
            <button onClick={restart} className='Story-button'>Restart</button>
        </>
    )
}

export default Story;