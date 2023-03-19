import { App } from 'app/App';
import { render } from 'react-dom';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';

const dom = document.getElementById('root')!;

render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
    dom,
);
