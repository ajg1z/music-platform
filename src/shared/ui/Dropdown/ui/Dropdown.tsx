import cn from 'classnames';
import {
    PropsWithChildren,
    memo,
    ReactNode,
    useState,
    useEffect,
    MouseEvent,
} from 'react';
import cls from './Dropdown.module.scss';

interface DropdownItem {
    label: ReactNode;
    id: number;
}

interface DropdownProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    selectedItem?: number | null;
    items: DropdownItem[];
    setIsOpen?: (value: boolean) => void;
    selectItem?: (id: number | null) => void;
}

export const Dropdown = (props: PropsWithChildren<DropdownProps>) => {
    const { className, children, isOpen, items, selectedItem, setIsOpen, selectItem } =
        props;

    const [isOpenLocal, setIsOpenLocal] = useState(false);
    const [selectedItemLocal, setItemLocal] = useState<number | null>(null);

    const [control, setControl] = useState<{}>('local');  
    const onClickWrapper = (e: MouseEvent) => {
        e.stopPropagation();

        if (isOpen === undefined) {
            setIsOpenLocal((state) => !state);
        }
    };

    const onSelectItem = (id: number) => {
        if (selectedItem === undefined) {
            setItemLocal(id);
        } else if (selectItem) {
            selectItem(id);
        }
    };

    const onClose = () => {
        if (isOpen === undefined) {
        }
    };

    useEffect(() => {
        if (isOpen === undefined) {
            setControl('local');
        }

        if (selectedItem === undefined) {
            set;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className={cn(cls.Dropdown, className)} onClick={onClickWrapper}>
                {children}
                {isOpen && (
                    <ul className={cls.DropdownItems}>
                        {items.map((item) => (
                            <button
                                type='button'
                                className={cn(
                                    cls.DropdownItem,
                                    cls.activeDropdownItem && selectedItem === item.id,
                                )}
                                key={item.id}
                                onClick={() => onSelectItem(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </ul>
                )}
            </div>

            {(isOpen || isOpenLocal) && (
                <div className={cls.background} onClick={onClose} />
            )}
        </>
    );
};
