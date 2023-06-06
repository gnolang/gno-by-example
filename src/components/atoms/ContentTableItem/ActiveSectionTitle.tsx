import { ISectionTitleProps } from './sectionTitle.types';
import React, { FC, Fragment } from 'react';
import { Box, Text, useColorMode, useTheme } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

const ActiveSectionTitle: FC<ISectionTitleProps> = ({ sectionInfo, handleToggle }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const activeColor =
    colorMode === 'dark' ? theme.colors.gno.light : theme.colors.gno.dark;

  return (
    <Fragment>
      <a
        href={`/#${sectionInfo.link}`}
        onClick={() => {
          handleToggle(sectionInfo.link);
        }}
      >
        <Box display={'flex'} alignItems={'center'}>
          <FiChevronRight color={activeColor} />
          <Text ml={2} fontWeight={600} color={activeColor}>
            {sectionInfo.section}
          </Text>
        </Box>
      </a>
    </Fragment>
  );
};

export default ActiveSectionTitle;
