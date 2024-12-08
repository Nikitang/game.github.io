import { FC } from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import InitPage from './pages/InitPage';
import ChoozePage from './pages/ChoozePage';

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<InitPage />} />
            <Route path="/main" element={<ChoozePage />} />
        </Routes>
    );
};

export default App;
const fn = async () => {
    try {
        const w = await axios.get('api/words');
        console.log(w.data);
    } catch (error) {
        console.error(error);
    }
};

fn();
