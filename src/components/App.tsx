import React, { FC } from 'react';
import { sum } from '../test';
import axios from 'axios';

const App: FC = () => {
    return <div>Hi!</div>;
};

export default App;
const fn = async () => {
    try {
        const w = await axios.get('http://localhost:5091/words');
        console.log(w.data);
    } catch (error) {
        console.error(error);
    }
};

fn();
