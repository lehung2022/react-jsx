import React, {useState} from 'react'


const Content = () => {
    const [name, setName] = useState("Hung");
    const [count, setCount] = useState(0);
    const handleNameChange = () => {
        const names = ["Hung", "Long", "Minh", "Huyen", "Tram", "Thu Phuong"];
        const int = Math.floor(Math.random() * 6);
        setName(names[int]);
    }

    

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
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
                Hello {name}
            </p>
            <button onClick={handleNameChange}>Just click on it</button>
            <button onClick={handleClick}>Show the name</button>
            <button onClick={justClick}>Third button</button>
        </main>
    )
}

export default Content;