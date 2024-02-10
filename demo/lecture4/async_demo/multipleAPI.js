document.addEventListener("DOMContentLoaded", () => {
  const catHtml = document.getElementById("cat-fact");
  const apiUrl = `https://catfact.ninja/fact`;
  const numberOfFacts = 5;

  // Helper function to create a delay
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const fetchCatFact = async () => {
    // let use imagine the api calls are taking longer to respond because of more complex operationds done in backend
    //   await delay(2000); // Delay for 2 seconds
    return fetch(apiUrl).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  };

  let factsList = "";
  let fetchPromises = [];

  for (let i = 0; i < numberOfFacts; i++) {
    fetchPromises.push(
      fetchCatFact().then((catFact) => {
        factsList += `<li>Cat Fact ${i + 1}: ${catFact.fact} (Length: ${
          catFact.length
        } characters)</li>`;
      })
    );
  }

  Promise.all(fetchPromises)
    .then(() => {
      catHtml.innerHTML = `<ul>${factsList}</ul>`;
    })
    .catch((error) => {
      console.error("There was a problem fetching the cat facts:", error);
      catHtml.innerHTML = "Failed to fetch cat facts.";
    });
});
