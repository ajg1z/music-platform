import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import { PropsWithChildren, ReactNode, useState, useMemo, MouseEvent, useRef } from 'react';
import cls from './Dropdown.module.scss';

interface DropdownItem {
    label: ReactNode;
    id: string;
}

interface DropdownProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    selectedItem?: string | null;
    items: DropdownItem[];
    setIsOpen?: (value: boolean) => void;
    selectItem?: (id: string) => void;
}

export const Dropdown = (props: PropsWithChildren<DropdownProps>) => {
    const { className, children, isOpen, items, selectedItem, setIsOpen, selectItem } = props;

    const dropdownRef = useRef<null | HTMLUListElement>(null);

    const [isOpenLocal, setIsOpenLocal] = useState(false);
    const [selectedItemLocal, setItemLocal] = useState<string | null>(null);

    const onClickWrapper = (e: MouseEvent) => {
        e.stopPropagation();

        if (isOpen === undefined) {
            setIsOpenLocal((state) => !state);
        } else {
            setIsOpen?.(!isOpen);
        }
    };

    const onSelectItem = (id: string) => {
        if (selectedItem === undefined) {
            setItemLocal(id);
        } else if (selectItem) {
            selectItem(id);
        }
    };

    const onClose = () => {
        if (isOpen === undefined) {
            setIsOpenLocal(false);
        } else {
            setIsOpen?.(false);
        }
    };

    const dropdownAnimationClasses = useMemo(
        () => ({
            enter: cls.dropdownEnter,
            enterActive: cls.dropdownEnterActive,
            exit: cls.dropdownExit,
            exitActive: cls.dropdownExitActive,
        }),
        [],
    );

    return (
        <>
            <div className={cn(cls.Dropdown, className)} onClick={onClickWrapper}>
                {children}
                <CSSTransition
                    classNames={dropdownAnimationClasses}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                    nodeRef={dropdownRef}
                    in={isOpen === undefined ? isOpenLocal : isOpen}
                >
                    <ul ref={dropdownRef} className={cls.DropdownItems}>
                        {items.map((item) => (
                            <button
                                type='button'
                                className={cn(cls.DropdownItem, {
                                    [cls.activeDropdownItem]:
                                        selectedItem === undefined
                                            ? selectedItemLocal === item.id
                                            : selectedItem === item.id,
                                })}
                                key={item.id}
                                onClick={() => onSelectItem(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </ul>
                </CSSTransition>
            </div>

            {(isOpen || isOpenLocal) && <div className={cls.background} onClick={onClose} />}
        </>
    );
};
