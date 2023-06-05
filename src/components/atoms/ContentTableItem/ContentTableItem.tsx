import { IContentTableItemProps } from './contentTableItem.types';
import React, { FC, Fragment } from 'react';
import { Box, Text, useColorMode, useTheme } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ContentTableItem: FC<IContentTableItemProps> = ({
  section,
  activeSection,
  setActiveSection
}) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const activeColor =
    colorMode === 'dark' ? theme.colors.gno.light : theme.colors.gno.dark;

  if (section.title === activeSection) {
    return (
      <Fragment>
        <a
          href={`/#${section.id}`}
          onClick={() => {
            setActiveSection(section.title);
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
        setActiveSection(section.title);
      }}
    >
      <Text color={theme.colors.gno.grayscale2} fontWeight={600}>
        {section.title}
      </Text>
    </Link>
  );
};

export default ContentTableItem;
