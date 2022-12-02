// == Import : npm
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
// Composants
import App from 'src/components/App';

// assets
import 'semantic-ui-css/semantic.min.css';

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
