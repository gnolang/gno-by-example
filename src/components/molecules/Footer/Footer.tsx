import IFooterProps from './footer.types';
import React, { FC } from 'react';
import {
  Box,
  Container,
  Link,
  Text,
  useMediaQuery,
  useTheme
} from '@chakra-ui/react';
import { BsDiscord, BsGithub, BsTelegram, BsTwitter } from 'react-icons/bs';
import Logo from '../../atoms/Logo/Logo';

const Footer: FC<IFooterProps> = () => {
  const theme = useTheme();

  const iconColor: string = theme.colors.gno.grayscale2b;
  const iconSize: string = '30px';

  const icons = [
    {
      icon: <BsDiscord color={iconColor} size={iconSize} />,
      link: 'https://discord.gg/YFtMjWwUN7'
    },
    {
      icon: <BsGithub color={iconColor} size={iconSize} />,
      link: 'https://github.com/gnolang/gno'
    },
    {
      icon: <BsTwitter color={iconColor} size={iconSize} />,
      link: 'https://twitter.com/_gnoland'
    },
    {
      icon: <BsTelegram color={iconColor} size={iconSize} />,
      link: 'https://t.me/gnoland'
    }
  ];

  return (
    <Container maxW={'80vw'} my={10}>
      <Box
        display={'flex'}
        justifyContent={{
          base: 'flex-start',
          lg: 'space-between'
        }}
        alignItems={{
          base: 'flex-start',
          lg: 'center'
        }}
        flexDirection={{
          base: 'column',
          lg: 'row'
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          mb={{
            base: 4,
            lg: 0
          }}
        >
          <Box mb={6}>
            <Logo />
          </Box>
          <Text fontSize={'sm'}>
            Gno by Example is a community project.
            <br />
            Check out the{' '}
            <Link
              color={theme.colors.gno.accent1}
              href={'https://github.com/gnolang/gno-by-example'}
            >
              GitHub repo
            </Link>
          </Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          <Text fontSize={'sm'} mb={6}>
            Learn more about Gno.land and
            <br />
            be part of the conversation:
          </Text>
          <Box display={'flex'} justifyContent={'space-between'}>
            {icons.map((socialIcon, index) => (
              <Link key={`social-${index}`} href={socialIcon.link} isExternal>
                {socialIcon.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
