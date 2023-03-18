import { useTranslation } from 'react-i18next';

import classNames from 'classnames';
import { PropsWithChildren, ErrorInfo, memo } from 'react';
import { Button } from 'antd';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
    info?: string | object | ErrorInfo;
}

export const PageError = memo((props: PropsWithChildren<PageErrorProps>) => {
    const { className, info } = props;
    const { t } = useTranslation();

    const onReload = () => {
        window.location.reload();
    };

    function printInfoError() {
        if (typeof info === 'string') return info;
        return JSON.stringify(info, undefined, 2);
    }

    return (
        <div className={classNames(cls.PageError, className)}>
            <p>{t('page_error')}</p>
            <Button onClick={onReload}>{t('button.reload')}</Button>

            {info && <div className={cls.infoLog}>{printInfoError()}</div>}
        </div>
    );
});
