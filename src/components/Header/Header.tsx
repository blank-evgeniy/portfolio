import { useState } from 'react';
import Link from '../ui/Link';
import { CloseIcon, MenuIcon } from '../img/Icons';

const MobileMenuStyles = {
    open: 'absolute left-0 top-0 z-10 flex h-screen w-screen flex-col gap-4 bg-secondary p-8 transition-transform duration-500 ease-out sm:hidden translate-x-0',
    close: 'absolute left-0 top-0 z-10 flex h-screen w-screen flex-col gap-4 bg-secondary p-8 transition-transform duration-500 ease-out sm:hidden translate-x-full',
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="bg-inherit font-main text-2xl text-white">
            <nav className="mx-auto max-w-[1360px] px-4">
                <div className="hidden justify-end gap-12 py-8 pr-12 align-middle sm:flex">
                    <Link>Обо мне</Link>
                    <Link>Проекты</Link>
                    <Link>Навыки</Link>
                    <Link>Контакты</Link>
                </div>
                <div
                    className={
                        isOpen ? MobileMenuStyles.open : MobileMenuStyles.close
                    }
                >
                    <Link onClick={handleOpen}>Обо мне</Link>
                    <Link onClick={handleOpen}>Проекты</Link>
                    <Link onClick={handleOpen}>Навыки</Link>
                    <Link onClick={handleOpen}>Контакты</Link>
                    <button
                        className="absolute right-8 top-8 z-20 block sm:hidden"
                        onClick={handleOpen}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <button
                    className="absolute right-8 top-8 block sm:hidden"
                    onClick={handleOpen}
                >
                    <MenuIcon />
                </button>
            </nav>
        </header>
    );
};

export default Header;
