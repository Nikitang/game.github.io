import { createRoot } from 'react-dom/client';

import App from './components/App';

const root = document.getElementById('root') as HTMLElement;
const container = createRoot(root);
container.render(<App />);
