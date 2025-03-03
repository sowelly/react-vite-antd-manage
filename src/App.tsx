import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import FormPage from './pages/FormPage';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import PortfolioPage from "./pages/PortfolioPage";
import ThreeJSPage from "./pages/ThreeJSPage";
import WebGlPage from "./pages/WebGlPage";
import DonutPage from "./pages/Donut";

function App() {
    return (
        <Router>
            <BasicLayout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/portfolio" element={<PortfolioPage/>}/>
                    <Route path="/game" element={<GamePage/>}/>
                    <Route path="/form" element={<FormPage/>}/>
                    <Route path="/threeJS" element={<ThreeJSPage/>}/>
                    <Route path="/webGl" element={<WebGlPage/>}/>
                    <Route path="/donut" element={<DonutPage/>}/>
                </Routes>
            </BasicLayout>
        </Router>
    );
}

export default App;