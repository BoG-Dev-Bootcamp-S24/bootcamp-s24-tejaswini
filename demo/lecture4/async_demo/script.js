
const apiUrl = `https://catfact.ninja/fact`;

document.addEventListener("DOMContentLoaded", () => {
  const catHtml = document.getElementById("cat-fact");

  // Fetch cat data from the API
    fetch(apiUrl)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Process and display cat fact
        console.log(data)
        const { fact, length } = data;
        

        const newCatHtml = `
                <p>Cat Fact: ${fact}</p>
                <p>Number of Charecters in the fact: ${length}</p>
            `;

            catHtml.innerHTML = newCatHtml;
      })
      .catch((error) => {
        console.error("There was a problem fetching the cat fact:", error);
        catHtml.innerHTML = "Failed to fetch cat fact.";
      });
  });









