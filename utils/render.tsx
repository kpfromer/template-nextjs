// A testing helper file
import { render, RenderOptions } from '@testing-library/react';
// import { ChakraProvider } from '@chakra-ui/react';
// import fetcher from '@lib/fetch';
// import { SWRConfig } from 'swr';

const Providers: React.FC = ({ children }) => {
  return <>{children}</>;
  // return (
  //   <SWRConfig value={{ fetcher, dedupingInterval: 0 }}>
  //     <ChakraProvider>{children}</ChakraProvider>
  //   </SWRConfig>
  // );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
