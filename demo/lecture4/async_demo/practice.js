// URL variables for the APIs


document.getElementById('nameForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    console.log(name);
    const agifyUrl = `https://api.agify.io?name=${name}`;
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;

    // Students will write async code here to fetch data from the APIs
    // and update the DOM with the results.
    
    // They should use Promise.all to handle the multiple fetch requests.
    
    // Error handling should also be implemented.
});