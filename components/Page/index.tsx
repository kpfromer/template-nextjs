export interface PageProps {}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <div style={{ color: 'red' }}>{children}</div>
    </>
  );
};

export default Page;
