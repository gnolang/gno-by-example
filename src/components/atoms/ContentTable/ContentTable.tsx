import React, { FC, Fragment, useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { ESectionTitle, IContentTableProps } from './contentTable.types';
import { FiChevronRight } from 'react-icons/fi';

const ContentTable: FC<IContentTableProps> = () => {
  const [activeSection, setActiveSection] = useState<ESectionTitle>(
    ESectionTitle.SECTION_1
  );

  const sections = [
    ESectionTitle.SECTION_1,
    ESectionTitle.SECTION_2,
    ESectionTitle.SECTION_3
  ];

  const renderMenuItem = (section: ESectionTitle) => {
    if (section == activeSection) {
      return (
        <Fragment>
          <FiChevronRight />
          <Text ml={2} fontWeight={600}>
            {section}
          </Text>
        </Fragment>
      );
    }

    return (
      <Text color={'#A8A8A8'} fontWeight={600}>
        {section}
      </Text>
    );
  };

  return (
    <Box
      padding={'20px 30px'}
      width={'15%'}
      backgroundColor={'white'}
      borderRadius={'10px'}
      boxShadow={'0px 0px 10px 0px rgba(128,142,155,0.15)'}
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
