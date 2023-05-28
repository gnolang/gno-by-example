import { IThemeToggleProps } from './themeToggle.types';
import React, { FC, useEffect } from 'react';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import clsx from 'clsx';
import styles from './themeToggle.module.css';

const ThemeToggle: FC<IThemeToggleProps> = () => {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {}, [colorMode]);

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      backgroundColor={'#E1E1E1'}
      padding={1}
      borderRadius={'20px'}
    >
      <IconButton
        aria-label={'Dark'}
        icon={<BsMoonFill />}
        variant={'ghost'}
        borderRadius={'40%'}
        size={'sm'}
        onClick={() => {
          setColorMode('dark');
        }}
        className={clsx({
          [styles.inactiveMode]: colorMode == 'light',
          [styles.activeMode]: colorMode == 'dark'
        })}
      />
      <IconButton
        aria-label={'Light'}
        icon={<BsSunFill />}
        variant={'ghost'}
        ml={2}
        borderRadius={'40%'}
        size={'sm'}
        onClick={() => {
          setColorMode('light');
        }}
        className={clsx({
          [styles.activeMode]: colorMode == 'light',
          [styles.inactiveMode]: colorMode == 'dark'
        })}
      />
    </Box>
  );
};

export default ThemeToggle;
