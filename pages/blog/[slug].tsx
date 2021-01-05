import Post from '@components/Blog/Post';
import Page from '@components/Page';
import { getBlogPost, BlogPostData, getBlogPostSlugs } from '@lib/blog';
import { blogMdxComponents } from '@utils/mdx';
import type { GetStaticPaths, GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getBlogPostSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getBlogPost(params.slug as string);
  return { props: post };
};

export interface BlogPostProps extends BlogPostData {}

const BlogPost: React.FC<BlogPostProps> = ({
  body,
  frontmatter: { title, coverImage, created },
}) => {
  const content = hydrate(body, { components: blogMdxComponents });
  return (
    <Page>
      <Post title={title} created={created} coverImage={coverImage}>
        {content}
      </Post>
    </Page>
  );
};

export default BlogPost;
