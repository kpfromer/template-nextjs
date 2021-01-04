// import { ChakraProvider } from '@chakra-ui/react';
import { withNextRouter } from 'storybook-addon-next-router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  withNextRouter,
  // (Story) => (
  //   <ChakraProvider>
  //     <Story />
  //   </ChakraProvider>
  // ),
];
