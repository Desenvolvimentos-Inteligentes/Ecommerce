import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
   <Router>
     <div className="App">
      <div className="nav"> 
        <h1 className="logo">Tech <span>Store</span></h1>
        <nav>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/">Produtos</link>
            </li>
            <li>
              <link to="/">Sobre</link>
            </li>
            <li>
              <link to="/">Contatos</link>
            </li>
          </ul>
        </nav>
      </div>
    
    </div>
   </Router>
  );
}

export default App;
