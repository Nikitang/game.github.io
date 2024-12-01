import { FC } from 'react';
import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import InitPage from './pages/InitPage';

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<InitPage />}></Route>
        </Routes>
    );
};

export default App;
// const fn = async () => {
//     try {
//         const w = await axios.get('http://localhost:5001/words');
//         console.log(w.data);
//     } catch (error) {
//         console.error(error);
//     }
// };

// fn();
