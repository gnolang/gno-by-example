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
  useMediaQuery,
  useTheme
} from '@chakra-ui/react';
import ContentTable from '../../molecules/ContentTable/ContentTable';
import Title from '../../atoms/Title/Title';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import tutorials from '../../../tutorials';
import { Waypoint } from 'react-waypoint';

const Home: FC<IHomeProps> = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const isLight = colorMode === 'light';

  const [displayedSections, setDisplayedSections] =
    useState<ITutorialSection[]>(tutorials);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>(
    tutorials.length > 0 ? tutorials[0].link : ''
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (!searchQuery) {
      setDisplayedSections(tutorials);

      return;
    }

    const filtered: ITutorialSection[] = tutorials
      .map((section: ITutorialSection) => {
        const tutorials = section.items.filter((tutorial) =>
          tutorial.data.metadata.title.includes(searchQuery)
        );

        if (tutorials.length > 0) {
          return {
            section: section.section,
            link: section.link,
            items: tutorials
          };
        }

        return null;
      })
      .filter(Boolean) as ITutorialSection[];

    setDisplayedSections(filtered);
  }, [searchQuery]);

  const [isMdOrSmaller] = useMediaQuery('(max-width: 62em)');

  return (
    <Box display={'flex'}>
      {!isMdOrSmaller && (
        <ContentTable
          sections={displayedSections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
      <Box
        ml={{
          base: 0,
          lg: 20
        }}
        display={'flex'}
        flexDirection={'column'}
      >
        <Title text={'Gno.land by Example'} size={'4xl'} />
        <Box
          width={{
            base: '100%',
            lg: '400px'
          }}
          mt={6}
        >
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
          {displayedSections.map((section, index) => {
            return (
              <Box
                key={`article-${index}`}
                display={'flex'}
                flexDirection={'column'}
                alignSelf={'flex-start'}
              >
                <Waypoint
                  onLeave={({ previousPosition, currentPosition, event }) => {
                    if (
                      previousPosition === 'inside' &&
                      currentPosition === 'above'
                    ) {
                      setActiveSection(section.link);
                    }
                  }}
                />
                <Box mb={4} id={section.link}>
                  <Title text={section.section} />
                </Box>
                <Stack
                  direction={'column'}
                  spacing={'10px'}
                  alignSelf={'flex-start'}
                >
                  {section.items.map((item, index) => {
                    return (
                      <Link
                        key={`article-${section.section}-${index}`}
                        to={`/tutorials/${section.link}/${item.link}`}
                      >
                        <Text textDecoration={'underline'}>
                          {item.data.metadata.title}
                        </Text>
                      </Link>
                    );
                  })}
                </Stack>
                <Waypoint
                  onEnter={({ previousPosition, currentPosition, event }) => {
                    if (
                      previousPosition === 'above' &&
                      currentPosition === 'inside'
                    ) {
                      setActiveSection(section.link);
                    }
                  }}
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
