import { ITutorialProps } from './tutorial.types';
import React, { FC } from 'react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Text,
  Tooltip,
  useToast
} from '@chakra-ui/react';
import Title from '../../atoms/Title/Title';
import { IoArrowBack, IoCopy } from 'react-icons/io5';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Tutorial: FC<ITutorialProps> = () => {
  const toast = useToast();
  const id = 'copy-toast';

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box mb={4} display={'flex'} alignItems={'center'}>
        <Link to={'/'}>
          <IconButton
            icon={<IoArrowBack />}
            aria-label="Back"
            size="md"
            variant="ghost"
            mr={4}
          />
        </Link>
        <Title text={'Item 1'} size={'3xl'} />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nisi mauris, congue vitae congue a, consequat nec sapien. Vestibulum
          imperdiet nec elit et lobortis. Suspendisse potenti. Nunc non lectus
          sapien. Nullam mollis convallis justo, et mollis ipsum finibus
          malesuada. Integer in mollis augue. Aliquam eros purus, egestas vitae
          quam at, interdum varius lectus. Sed pharetra, eros in tincidunt
          porttitor, justo erat vestibulum ex, id accumsan magna elit non diam.
          Nullam eu suscipit erat. Suspendisse luctus dui at ligula laoreet
          dapibus. Sed volutpat luctus purus, sit amet imperdiet dolor rhoncus
          a.
        </Text>
        <Box
          display={'flex'}
          width={'100%'}
          padding={'30px'}
          backgroundColor={'#F1F1F1'}
          borderRadius={'10px'}
          my={6}
          flexDirection={'column'}
        >
          <Box ml={'auto'} display={'flex'} alignItems={'center'}>
            <Tooltip label={'Copy to clipboard'} fontSize={'sm'}>
              <Button
                leftIcon={<IoCopy />}
                variant="ghost"
                size={'sm'}
                onClick={() => {
                  if (!toast.isActive(id)) {
                    toast({
                      id,
                      title: `Copied!`,
                      status: 'success',
                      position: 'bottom',
                      isClosable: true,
                      duration: 3000
                    });
                  }
                }}
              >
                Copy
              </Button>
            </Tooltip>
          </Box>
          <Text>Hello!</Text>
        </Box>
        <Divider />
        <Box
          mt={6}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'100%'}
        >
          <Button
            leftIcon={<HiChevronDoubleLeft />}
            variant={'outline'}
            padding={6}
          >
            Item n-1
          </Button>
          <Button
            rightIcon={<HiChevronDoubleRight />}
            variant={'outline'}
            padding={6}
          >
            Item n+1
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Tutorial;
