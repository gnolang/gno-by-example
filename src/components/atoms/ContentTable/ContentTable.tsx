import React, { FC, useEffect, useRef, useState } from 'react';
import { Box, Stack, Text, useColorMode, useTheme } from '@chakra-ui/react';
import { IContentTableProps } from './contentTable.types';
import { useLocation } from 'react-router-dom';
import styles from './contentTable.module.css';
import ContentTableItem from '../ContentTableItem/ContentTableItem';

const ContentTable: FC<IContentTableProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const scrollRef = useRef<HTMLElement | null>(null);
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const { pathname, hash, key } = useLocation();

  const wrapperColor =
    colorMode === 'dark' ? theme.colors.gno.dark : theme.colors.gno.light;

  useEffect(() => {
    if (sections.length > 0) {
      setActiveSection(sections[0].title);
    }
  }, [sections]);

  useEffect(() => {
    if (hash === '') {
      // Scroll to top
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');

      scrollRef.current = document.getElementById(id);
    }

    return () => {
      // Cleanup function to reset scroll position
      scrollRef.current = null;
    };
  }, [pathname, hash, key]); // Perform this on route change

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollRef.current]);

  return (
    <Box
      minWidth={'300px'}
      padding={'20px 100px 20px 30px'}
      backgroundColor={wrapperColor}
      borderRadius={'10px'}
      boxShadow={'-4px 4px 32px -8px rgba(0, 0, 0, 0.07)'}
      height={'auto'}
      alignSelf={'flex-start'}
      className={styles.contentTable}
    >
      <Stack direction={'column'} spacing={'15px'}>
        {sections.length === 0 && <Text>No sections available</Text>}
        {sections.map((section, index) => {
          return (
            <Box
              key={`content-table-${index}`}
              display={'flex'}
              alignItems={'center'}
            >
              <ContentTableItem
                section={section}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ContentTable;
