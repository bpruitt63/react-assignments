import React, {useState} from 'react';
import Story from './Story';
import Form from './Form';
import Choice from './Choice';
import stories from './stories';

function Madlib(){
    const [storyChoice, setStoryChoice] = useState(stories[0]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [story, setStory] = useState(storyChoice.story);

    const getResults = (results, story) => {
        for (let word in results){
            story = story.replace(word, results[word]);
        }
        setStory(story);
        setIsSubmitted(true);
    }

    const restart = () => {
        setIsSubmitted(false);
    }

    const choose = (choice) => {
        setStoryChoice(choice);
        setStory(storyChoice.story);
    }

    return (
        <>
            <h1>Madlibs!</h1>
            {!isSubmitted && <Choice stories={stories} 
                choose={choose} storyChoice={storyChoice}/>}
            {isSubmitted ? <Story story={story} restart={restart} /> : 
                <Form storyChoice={storyChoice} 
                getResults={getResults} />}
        </>
    )
}

export default Madlib;