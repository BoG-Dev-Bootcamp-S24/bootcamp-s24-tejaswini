document.getElementById('nameForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
  
    // Constructing API URLs
    //age-
    const agifyUrl = `https://api.agify.io?name=${name}`;
    //gender-
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    //nationality-
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;
  
    //solution-
    // try {
    //   // Fetching data from all three APIs simultaneously
    //   const responses = await Promise.all([
    //     fetch(agifyUrl),
    //     fetch(genderizeUrl),
    //     fetch(nationalizeUrl)
    //   ]);
  
    //   // Parsing JSON responses
    //   const results = await Promise.all(responses.map(response => {
    //     if (!response.ok) {
    //       throw new Error(`Error with the request! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   }));
  
    //   // Updating the DOM with the fetched data
    //   document.getElementById('ageResult').textContent = `Predicted Age: ${results[0].age}`;
    //   document.getElementById('genderResult').textContent = `Predicted Gender: ${results[1].gender}`;
    //   document.getElementById('nationalityResult').textContent = `Top Predicted Nationality: ${results[2].country[0]?.country_id || 'Unknown'}`;
    // } catch (error) {
    //   console.error("There was a problem fetching the data:", error);
    //   // Update the DOM to show the error message
    //   document.getElementById('ageResult').textContent = 'Error fetching data';
    //   document.getElementById('genderResult').textContent = 'Error fetching data';
    //   document.getElementById('nationalityResult').textContent = 'Error fetching data';
    // }
  });
  