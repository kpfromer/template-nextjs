import { Box, Flex } from '@chakra-ui/react';

export interface PageProps {}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Flex>
        <Box mx="auto" maxW={900} flexGrow={1} px={[2, 2, 0]}>
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Page;
