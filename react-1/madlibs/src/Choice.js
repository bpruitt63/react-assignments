import React from 'react';

function Choice({stories, choose, storyChoice}){
    const handleChoice = e => {
        const result = stories.filter(s => {
            return s.title === e.target.value;
        })
        const choice = choose(result[0]);
        return choice;
    }

    return (
        <select name='choice' id='choice' className='Choice'
            value={storyChoice.title} onChange={handleChoice}
        >
            {stories.map(s => {
                return <option value={s.title} key={s.title}>{s.title}</option>
            })}
        </select>
    )
}

export default Choice;