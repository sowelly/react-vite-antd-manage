import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import NotFound from "./pages/404/index";

function App() {
    return (
        <Router>
            <BasicLayout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/form" element={<FormPage/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BasicLayout>
        </Router>
    );
}

export default App;