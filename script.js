{/* <div id="joke" class="joke">Loading Jokes....</div>
<button id="jokeBtn" class="btn0">Next Jokes</button> */}

const Jokes = document.querySelector('#joke');
const JokesBtn = document.querySelector('#jokeBtn');

const generateJokes = async ( ) => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    try {
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        Jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(error);
    }
 
}

JokesBtn.addEventListener('click', generateJokes);
generateJokes();