import React, { FC, Fragment, useEffect, useState } from 'react';
import { Box, Stack, Text, useColorMode } from '@chakra-ui/react';
import { IContentTableProps, ISectionBundle } from './contentTable.types';
import { FiChevronRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import styles from './contentTable.module.css';

const ContentTable: FC<IContentTableProps> = (props) => {
  const { sections } = props;

  const [activeSection, setActiveSection] = useState<string>(sections[0].title);

  const { colorMode } = useColorMode();

  const activeColor = colorMode === 'dark' ? 'white' : '#1C1C1C';

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      // Scroll to top
      window.scrollTo(0, 0);

      return;
    }

    const timeoutID = setTimeout(() => {
      // Scroll to item
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [pathname, hash, key]); // do this on route change

  const renderMenuItem = (section: ISectionBundle) => {
    if (section.title == activeSection) {
      return (
        <Fragment>
          <a
            href={`/#${section.id}`}
            onClick={() => {
              handleSectionChange(section.title);
            }}
          >
            <Box display={'flex'} alignItems={'center'}>
              <FiChevronRight color={activeColor} />
              <Text ml={2} fontWeight={600} color={activeColor}>
                {section.title}
              </Text>
            </Box>
          </a>
        </Fragment>
      );
    }

    return (
      <Link
        to={`/#${section.id}`}
        onClick={() => {
          handleSectionChange(section.title);
        }}
      >
        <Text color={'#A8A8A8'} fontWeight={600}>
          {section.title}
        </Text>
      </Link>
    );
  };

  const wrapperColor = colorMode === 'dark' ? '#1C1C1C' : 'white';

  return (
    <Box
      padding={'20px 100px 20px 30px'}
      backgroundColor={wrapperColor}
      borderRadius={'10px'}
      boxShadow={'-4px 4px 32px -8px rgba(0, 0, 0, 0.07)'}
      height={'auto'}
      alignSelf={'flex-start'}
      className={styles.contentTable}
    >
      <Stack direction={'column'} spacing={'15px'}>
        {sections.map((section, index) => {
          return (
            <Box
              key={`content-table-${index}`}
              display={'flex'}
              alignItems={'center'}
            >
              {renderMenuItem(section)}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ContentTable;
