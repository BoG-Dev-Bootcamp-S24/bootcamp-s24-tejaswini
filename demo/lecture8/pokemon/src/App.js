import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AllPokemon from "./pages/AllPokemon";
import Pokemon from "./pages/Pokemon";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      
    </>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import AllPokemon from "./pages/AllPokemon";
// import Pokemon from "./pages/Pokemon";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home loggedIn={loggedIn} />} />
//           <Route
//             path="login"
//             element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
//           />
//           <Route path="pokemon">
//             <Route path="all" element={<AllPokemon />} />
//             <Route path=":pokemonId" element={<Pokemon />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
