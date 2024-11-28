import { FC } from 'react';
import axios from 'axios';
import classes from './App.module.scss';

const App: FC = () => {
    return <div className={classes.aaa}>Hi!</div>;
};

export default App;
const fn = async () => {
    try {
        const w = await axios.get('http://localhost:5001/words');
        console.log(w.data);
    } catch (error) {
        console.error(error);
    }
};

fn();
