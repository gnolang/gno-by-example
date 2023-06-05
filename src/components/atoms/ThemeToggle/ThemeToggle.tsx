import { IThemeToggleProps } from './themeToggle.types';
import React, { FC } from 'react';
import { Box, IconButton, useColorMode, useTheme } from '@chakra-ui/react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import clsx from 'clsx';
import styles from './themeToggle.module.css';

const ThemeToggle: FC<IThemeToggleProps> = () => {
  const { colorMode, setColorMode } = useColorMode();
  const theme = useTheme();
  const isLight: boolean = colorMode === 'light';

  const renderIcon = (light: boolean) => {
    const icon = light ? <BsSunFill /> : <BsMoonFill />;
    const label = light ? 'Light' : 'Dark';

    const sunClasses = clsx({
      [styles.activeSun]: isLight,
      [styles.inactiveSun]: !isLight
    });

    const moonClasses = clsx({
      [styles.activeMoon]: !isLight,
      [styles.inactiveMoon]: isLight
    });

    return (
      <IconButton
        aria-label={label}
        icon={icon}
        onClick={() => {
          setColorMode(light ? 'light' : 'dark');
        }}
        ml={light ? 1 : 0}
        className={light ? sunClasses : moonClasses}
        variant="ghost"
        borderRadius="10px"
        size="sm"
      />
    );
  };

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      backgroundColor={clsx({
        [theme.colors.gno.grayscale1a]: isLight,
        [theme.colors.gno.grayscale5]: !isLight
      })}
      padding={1}
      borderRadius={'15px'}
    >
      {renderIcon(false)}
      {renderIcon(true)}
    </Box>
  );
};

export default ThemeToggle;
