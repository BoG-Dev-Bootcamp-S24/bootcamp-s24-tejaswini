import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const navigate = useNavigate();
    if (props.loggedIn) {
        return <div> logged in </div>;
    }
    else {
        return(<div>
            <div>
             logged in
            </div>
            <button onClick={() => {
                navigate("/login");
            }}>
                log in page
            </button>
        </div>)
    }
  
}



// import { useNavigate } from "react-router-dom";

// export default function Home(props) {
//   const navigate = useNavigate();

//   if (props.loggedIn) {
//     return <>logged in</>;
//   } else {
//     return (
//       <div>
//         <p>not logged in</p>
//         <button
//           onClick={() => {
//             navigate("/login");
//           }}
//         >
//           log in page
//         </button>
//       </div>
//     );
//   }
// }
