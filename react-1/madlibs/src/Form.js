import React, {useEffect, useState} from 'react';

function Form({storyChoice, getResults}){
    
    const initialState = storyChoice.blanks.reduce((acc, b) => (acc[b]='', acc), {});

    const [data, setData] = useState(initialState);

    useEffect(() => {
        setData(storyChoice.blanks.reduce((acc, b) => (acc[b]='', acc), {}))
    }, [storyChoice])

    const handleChange = (e) => {
        const {name, value} = e.target
        setData(d => ({
            ...d,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const res = data;
        for (let word in res){
            if (res[word] === ''){
                alert(`Please enter a value for ${word}`)
                return false;
            }
        }
        const updatedStory = getResults(res, storyChoice.story);
        setData(initialState);
        return updatedStory;
    }

    return (
        <form onSubmit={handleSubmit}>
            {storyChoice.blanks.map(b => {
                return <input type='text' 
                name={b} id={b} 
                placeholder={b} 
                value={data[b]}
                onChange={handleChange}
                key={b}
                className='Form-input'/>
            })}
            <button className='Form-button' type='submit'>Get Story</button>
        </form>
    )
}

export default Form;