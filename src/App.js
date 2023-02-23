import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import CoderSnippet from "./assets/atom-coderSnippet/atom-coderSnippet";
//import CodersList from "./assets/mol-codersList/mol-codersList";
import CoderProfile from "./Components/mol-coderProfile/mol-coderProfile";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detailsProfile/:id" element={<CoderProfile />}/>
      </Routes>
    </>
  );
}

export default App;
