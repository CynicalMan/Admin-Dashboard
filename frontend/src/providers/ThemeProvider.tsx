import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { themes } from '../theme';

interface ThemeProviderProps{
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme);
    const themeClasses = themes[currentTheme];

    return (
        <div className={`${themeClasses.background} ${themeClasses.text} min-h-screen`}>
            {children}
        </div>
    );
};

export default ThemeProvider;
