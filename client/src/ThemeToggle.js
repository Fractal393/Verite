import React from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full ">
            {theme === 'dark' ? (
                <SunIcon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-2xs cursor-pointer"
                />
            ) : (
                    <MoonIcon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-2xs cursor-pointer"
                    />
                )}
        </div>
    );
};

export default Toggle;