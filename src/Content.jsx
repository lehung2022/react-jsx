import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Hung", "Long", "Minh", "Huyen", "Tram", "Thu Phuong"];
        const int = Math.floor(Math.random() * 6);
        return names[int];
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
        </main>
    )
}

export default Content;