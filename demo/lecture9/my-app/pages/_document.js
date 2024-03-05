import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}







// export default async function handler(req, res) {
//   const name = req.query.name;
//   const url = "https://pokeapi.co/api/v2/pokemon/";

//   if (name) {
//     const response = await fetch(url + name);
//     try {
//       const data = await response.json();
//       res.status(200).json(data);
//     } catch (e) {
//       res.status(400).json({ error: "pokemon does not exist" });
//     }
//   } else {
//     const id = Math.floor(Math.random() * 1000) + 1;
//     const response = await fetch(url + id);
//     const data = await response.json();
//     res.status(200).json(data);
//   }
// }
