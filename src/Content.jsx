import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Hung", "Long", "Minh", "Huyen", "Tram", "Thu Phuong"];
        const int = Math.floor(Math.random() * 6);
        return names[int];
    }

    const handleClick = () => {
        console.log("you clicked it");
    }

    const justClick = (names) => {
        console.log(`${names} was clicked`)
    }

    const clickHandler = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}
            </p>
            <button onClick={handleClick()}>Just click on it</button>
            <button onClick={() => justClick('Hung')}>Show the name</button>
            <button onClick={(e) => clickHandler(e)}>Third button</button>
        </main>
    )
}

export default Content;