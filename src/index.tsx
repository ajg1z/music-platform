import { App } from 'app/App';
import { render } from 'react-dom';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AntdProvider } from 'app/providers/Antd';

const dom = document.getElementById('root')!;

render(
    <BrowserRouter>
        <AntdProvider>
            <App />
        </AntdProvider>
    </BrowserRouter>,
    dom,
);
