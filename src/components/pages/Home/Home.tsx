import { IHomeProps, ITutorialSection } from './home.types';
import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorMode,
  useTheme
} from '@chakra-ui/react';
import ContentTable from '../../atoms/ContentTable/ContentTable';
import Title from '../../atoms/Title/Title';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import tutorials from '../../../tutorials';

const Home: FC<IHomeProps> = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const isLight = colorMode === 'light';

  const [tutorialSections, setTutorialSections] = useState<ITutorialSection[]>(
    []
  );
  const [displayedSections, setDisplayedSections] =
    useState<ITutorialSection[]>(tutorialSections);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const createID = (input: string) => {
    return input.trim().toLowerCase().replace(/\s+/g, '-');
  };

  useEffect(() => {
    if (tutorials.length < 1) {
      return;
    }

    const sectionsMap: { [section: string]: ITutorialSection } = {};

    for (const tutorial of tutorials) {
      const { data, link } = tutorial;
      const section = data.metadata.section;

      if (!sectionsMap[section]) {
        sectionsMap[section] = {
          section,
          items: []
        };
      }

      const title = data.metadata.title;
      sectionsMap[section].items.push({ title, link });
    }

    const sections = Object.values(sectionsMap);

    setTutorialSections(sections);
    setDisplayedSections(sections);
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setDisplayedSections(tutorialSections);
      return;
    }

    const filtered = tutorialSections
      .map((value) => {
        const items = value.items.filter((item) =>
          item.title.includes(searchQuery)
        );
        if (items.length > 0) {
          return {
            section: value.section,
            items
          };
        }
        return null;
      })
      .filter(Boolean) as ITutorialSection[];

    setDisplayedSections(filtered);
  }, [searchQuery, tutorialSections]);

  return (
    <Box display={'flex'}>
      <ContentTable
        sections={displayedSections.map((article) => {
          return {
            title: article.section,
            id: `section-${createID(article.section)}`
          };
        })}
      />
      <Box ml={20} display={'flex'} flexDirection={'column'}>
        <Title text={'Gno.land by Example'} size={'4xl'} />
        <Box width={'400px'} mt={6}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <BsSearch color={theme.colors.gno.grayscale2} />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Search"
              variant="outline"
              focusBorderColor={theme.colors.gno.grayscale2}
              _placeholder={{
                color: clsx({
                  [theme.colors.gno.grayscale2]: isLight,
                  [theme.colors.gno.light]: !isLight
                })
              }}
              css={{
                background: clsx({
                  [theme.colors.gno.grayscale1]: isLight,
                  [theme.colors.gno.dark]: !isLight
                })
              }}
              onChange={handleInputChange}
            />
          </InputGroup>
        </Box>
        <Stack mt={6} direction={'column'} spacing={'20px'}>
          {displayedSections.length === 0 && <Text>No search results</Text>}
          {displayedSections.map((article, index) => {
            return (
              <Box
                key={`article-${index}`}
                display={'flex'}
                flexDirection={'column'}
                alignSelf={'flex-start'}
              >
                <Box mb={4} id={`section-${createID(article.section)}`}>
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
                        to={`/tutorials/${item.link}`}
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
