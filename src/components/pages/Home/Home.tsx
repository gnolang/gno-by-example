import { IHomeProps } from './home.types';
import React, { FC } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import ContentTable from '../../atoms/ContentTable/ContentTable';
import Title from '../../atoms/Title/Title';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ESectionTitle } from '../../atoms/ContentTable/contentTable.types';
import clsx from 'clsx';

const Home: FC<IHomeProps> = () => {
  const articles: {
    section: ESectionTitle;
    items: {
      title: string;
      link: string;
    }[];
  }[] = [
    {
      section: ESectionTitle.SECTION_1,
      items: [
        {
          title: 'Item 1',
          link: '/tutorials/1'
        },
        {
          title: 'Item 2',
          link: '/tutorials/2'
        },
        {
          title: 'Item 3',
          link: '/tutorials/3'
        }
      ]
    },
    {
      section: ESectionTitle.SECTION_2,
      items: [
        {
          title: 'Item 1',
          link: '/tutorials/4'
        },
        {
          title: 'Item 2',
          link: '/tutorials/5'
        },
        {
          title: 'Item 3',
          link: '/tutorials/6'
        }
      ]
    }
  ];

  const { colorMode } = useColorMode();
  const isLight = colorMode === 'light';

  return (
    <Box display={'flex'}>
      <ContentTable />
      <Box ml={20} display={'flex'} flexDirection={'column'}>
        <Title text={'Gno.land by Example'} size={'4xl'} />
        <Box width={'400px'} mt={6}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <BsSearch color="#A8A8A8" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Search"
              variant="outline"
              focusBorderColor={'#A8A8A8'}
              _placeholder={{
                color: clsx({
                  ['#A8A8A8']: isLight,
                  ['white']: !isLight
                })
              }}
              css={{
                background: clsx({
                  ['#F1F1F1']: isLight,
                  ['#1C1C1C']: !isLight
                })
              }}
            />
          </InputGroup>
        </Box>
        <Stack mt={6} direction={'column'} spacing={'20px'}>
          {articles.map((article, index) => {
            return (
              <Box
                key={`article-${index}`}
                display={'flex'}
                flexDirection={'column'}
                alignSelf={'flex-start'}
              >
                <Box mb={4}>
                  <Title text={article.section} />
                </Box>

                <Stack
                  direction={'column'}
                  spacing={'10px'}
                  alignSelf={'flex-start'}
                >
                  {article.items.map((item, index) => {
                    return (
                      <Link
                        key={`article-${article.section}-${index}`}
                        to={item.link}
                      >
                        <Text textDecoration={'underline'}>{item.title}</Text>
                      </Link>
                    );
                  })}
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
