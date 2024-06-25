import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="nav">
                    <h1 className="logo">Intel<span>Dev</span></h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Produtos</Link>
                            </li>
                            <li>
                                <Link to="/about">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contatos</Link>
                            </li>
                            <li>
                                <Link to="/account">Conta</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="navs-icon-container">
                        <div className="search-input-container">
                            <input type="search" />
                            {/*<FontAwesomeIcon icon={fa}/>*/}
                        </div>
                        <button>
                            <div></div>
                        </button>
                        <button>
                            <div></div>
                        </button>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;
