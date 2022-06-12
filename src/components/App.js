// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    /* State for page isLoading. */
    const [isLoaded, setIsLoaded] = useState(false);
    /* State for dog image from fetch. */
    const [dogImgSrc, setDogImgSrc] = useState("");

    /* Side effect with empty dependency array. */
    useEffect(() => {
        /* Fetch as Side effect. */
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                console.log("data: ", data.message)
                /* Call setState for dog img. */
                setDogImgSrc(data.message);
                /* Call setState for Page loading. */
                setIsLoaded(true);
            })

    }, []);


    // If data has not loaded, yet, show loading indicator.
    if (!isLoaded) {return <p>Loading...</p>};

    return (
        <div>
            <p></p>
            <img src={dogImgSrc} alt="A Random Dog" />
        </div>
    )

}

export default App;  
