

async function postCard() {
    const response = await fetch("https://jsonplaceholder.typicode.com");
    const blob = await response.blob();
    console.log(blob);
}

postCard();