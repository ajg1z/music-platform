import { ConfigProvider, theme } from 'antd';
import { FC, ReactNode } from 'react';

interface AntdProviderProps {
    children: ReactNode;
}

export const AntdProvider: FC<AntdProviderProps> = ({ children }) => (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: 'var(--primary-color)',
                colorPrimaryBg: 'var(-bg-color)',
                fontSize: 16,
            },
            components: {
                Button: {},
            },
        }}
    >
        {children}
    </ConfigProvider>
);
