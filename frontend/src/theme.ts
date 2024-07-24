// src/theme.ts
import { ThemeEnum } from './enums/ThemeEnum';

interface Theme {
    background: string;
    text: string;
}

export const themes: Record<ThemeEnum, Theme> = {
    [ThemeEnum.BLACK]: {
        background: 'theme-black',
        text: 'text-white',
    },
    [ThemeEnum.ORANGE]: {
        background: 'theme-orange',
        text: 'text-black',
    },
    [ThemeEnum.BLUE]: {
        background: 'theme-blue',
        text: 'text-white',
    },
    [ThemeEnum.GREEN]: {
        background: 'theme-green',
        text: 'text-white',
    },
};
