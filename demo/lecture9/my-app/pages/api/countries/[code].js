// usually, countryNotes will be stored in a database
let countryNotes = {};

export default async function handler(req, res) {
  const code = req.query.code;
  console.log(req.query)

  try {
    switch (req.method) {
      case 'GET':
        // Return the note for the requested country
        const note = countryNotes[code] || 'No note available';
        res.status(200).json({ code, note });
        break;

      case 'POST':
        // Add or update a note for a country
        let countryInfo = {};

        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        
        if (!response.ok) {
          throw new Error(`Error fetching data for country code: ${code}`);
        }
    
        const data = await response.json();
        countryInfo = {
          name: data[0].name.common,
          capital: data[0].capital[0],
          population: data[0].population,
          region: data[0].region
        };
    
        countryNotes[code] = countryInfo;
        res.status(200).json({ message: `Note added for ${code}`, countryInfo });
        break;

      case 'PUT':
        const newNote = JSON.parse(req.body).note
        console.log(JSON.parse(req.body).note)
        if (!code || !newNote) {
            res.status(400).json({ message: 'Country code and note are required' });
            break;
          }
        if (!countryNotes[code]) {
          throw new Error('Note not found.');
        }
        countryNotes[code] = newNote;
        res.status(200).json({ message: `Note updated for ${code}` });
        break;

      case 'DELETE':
        if (!countryNotes[code]) {
          throw new Error('Note not found.');
        }
        delete countryNotes[code];
        res.status(200).json({ message: `Note deleted for ${code}` });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}