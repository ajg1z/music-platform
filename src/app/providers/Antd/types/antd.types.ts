import { ComponentToken } from 'antd/es/rate/style';
import { AliasToken } from 'antd/es/theme/internal';

export type AntdThemeStyles = (Partial<ComponentToken> & Partial<AliasToken>) | undefined;
