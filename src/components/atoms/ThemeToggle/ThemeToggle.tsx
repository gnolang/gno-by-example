import { IThemeToggleProps } from './themeToggle.types';
import React, { FC, useEffect } from 'react';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import clsx from 'clsx';
import styles from './themeToggle.module.css';

const ThemeToggle: FC<IThemeToggleProps> = () => {
  const { colorMode, setColorMode } = useColorMode();

  const isLight: boolean = colorMode === 'light';

  useEffect(() => {}, [colorMode]);

  const renderIcon = (light: boolean) => {
    const commonProps = {
      variant: 'ghost',
      borderRadius: '10px',
      size: 'sm'
    };

    if (light) {
      return (
        <IconButton
          aria-label={'Light'}
          icon={<BsSunFill />}
          ml={1}
          onClick={() => {
            setColorMode('light');
          }}
          className={clsx({
            [styles.activeSun]: isLight,
            [styles.inactiveSun]: !isLight
          })}
          {...commonProps}
        />
      );
    }

    return (
      <IconButton
        aria-label={'Dark'}
        icon={<BsMoonFill />}
        onClick={() => {
          setColorMode('dark');
        }}
        className={clsx({
          [styles.activeMoon]: !isLight,
          [styles.inactiveMoon]: isLight
        })}
        {...commonProps}
      />
    );
  };

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      backgroundColor={clsx({
        ['#E1E1E1']: isLight,
        ['#141414']: !isLight
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
