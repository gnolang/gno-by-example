import React, { FC } from 'react';
import { Text, useTheme } from '@chakra-ui/react';
import { ISectionTitleProps } from './sectionTitle.types';

const InactiveSectionTitle: FC<ISectionTitleProps> = ({
  sectionInfo,
  handleToggle
}) => {
  const theme = useTheme();

  return (
    <a
      href={`/#${sectionInfo.link}`}
      onClick={() => {
        handleToggle(sectionInfo.link);
      }}
    >
      <Text color={theme.colors.gno.grayscale2} fontWeight={600}>
        {sectionInfo.section}
      </Text>
    </a>
  );
};

export default InactiveSectionTitle;
