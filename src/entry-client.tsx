import './index.css';
import ReactDOM from 'react-dom/client';

import Root from './Root';

ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <Root />);
