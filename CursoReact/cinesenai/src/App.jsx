import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Constador } from "./components/Contador";
// import { Rodape } from "./components/Rodape";
// // function App() {
// //   const titulo = "CineCenai";
// //   const ano = 2026;
// //   const duracaoMinutos = 166;
// //   return(
// //     <>
// //       <h1 className="titulo">{titulo}</h1>
// //       <p style={{color: "gray"}}>Em cartaz desde {ano}</p>
// //       <p>Duna dura {Math.floor(duracaoMinutos / 60)} horas e {duracaoMinutos % 60} min.</p>
// //       <input type="text" />
// //     </>
// //   );
// // }

// // export default App;

// function App() {

//   return(
//     <>
//       <h1>CineSenai</h1>
//       <Rodape />
//     </>
//   );
// };

// export default App;

function App() {
  return (
    //   <div className="container">
    //     <h1>
    //       Cine <span style={{ color: "var(--primary)"}}>Senai</span>
    //     </h1>
    //     <p style={{ color: "var(--text-secondary)" }}>
    //       Catalogo de Filmes em breve.
    //     </p>
    //     <FichaDoFileme />
    //   </div>

    <>
      {/*Criação da Pagina inicial*/}

      <NavBar /> {/*Barra de navegação*/}
      <Constador />
      <Home /> {/*Rederização da Home*/}
    </>
  );  
}

export default App;
