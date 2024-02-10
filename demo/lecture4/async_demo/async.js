
document.addEventListener("DOMContentLoaded", async () => {
    const numberOfFacts = 5;
    const apiUrl = `https://catfact.ninja/fact`;
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    const catHtml = document.getElementById("cat-async");
  
    const fetchCatFact = async () => {
      // let use imagine the api calls are taking longer to respond because of more complex operationds done in backend
      // await delay(2000); // Delay for 2 seconds
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    };
  
    try {
      let factsList = '';
  
      for (let i = 0; i < numberOfFacts; i++) {
        const catFact = await fetchCatFact();
        factsList += `<li>Cat Fact: ${catFact.fact} (Length: ${catFact.length} characters)</li>`;
      }
  
      catHtml.innerHTML = `<ul>${factsList}</ul>`;
    } catch (error) {
      console.error("There was a problem fetching the cat facts:", error);
      catHtml.innerHTML = "Failed to fetch cat facts.";
    }
  });




// more optimized way-

//   document.addEventListener("DOMContentLoaded", async () => {
//     const numberOfFacts = 5;
//     const apiUrl = `https://catfact.ninja/fact`;
//     const delay = (ms) => new Promise(res => setTimeout(res, ms));
//     const catHtml = document.getElementById("cat-async");
  
//     const fetchCatFact = async () => {
//       await delay(2000); // Delay for 2 seconds
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     };
  
//     try {
//       let promises = [];
//       for (let i = 0; i < numberOfFacts; i++) {
//         promises.push(fetchCatFact());
//       }
  
//       const facts = await Promise.all(promises);
//       const factsList = facts.map((catFact, i) => `<li>Cat Fact ${i + 1}: ${catFact.fact} (Length: ${catFact.length} characters)</li>`).join('');
//       catHtml.innerHTML = `<ul>${factsList}</ul>`;
//     } catch (error) {
//       console.error("There was a problem fetching the cat facts:", error);
//       catHtml.innerHTML = "Failed to fetch cat facts.";
//     }
//   });