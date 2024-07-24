import React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/slices/Theme.slice';
import { ThemeEnum } from '../../enums/ThemeEnum';
import { Circle } from '@mui/icons-material';

const ThemePicker: React.FC = () => {
    const dispatch = useDispatch();

    const handleChangeTheme = (theme: ThemeEnum) => {
        dispatch(setTheme(theme));
    };

    return (
        <div className='flex flex-wrap items-center justify-center md:justify-center'>
            <button onClick={() => handleChangeTheme(ThemeEnum.BLACK)} style={{ color: `${ThemeEnum.BLACK}`}}><Circle /></button>
            <button onClick={() => handleChangeTheme(ThemeEnum.ORANGE)} style={{ color: `${ThemeEnum.ORANGE}`}}><Circle /></button>
            <button onClick={() => handleChangeTheme(ThemeEnum.BLUE)} style={{ color: `${ThemeEnum.BLUE}`}}><Circle /></button>
            <button onClick={() => handleChangeTheme(ThemeEnum.GREEN)} style={{ color: `${ThemeEnum.GREEN}`}}><Circle /></button>
        </div>
    );
};

export default ThemePicker;