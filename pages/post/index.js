import React from 'react';
import client from '../../client';
import groq from 'groq';
import Link from 'next/link';

const post = (props) => {
  const { posts = [] } = props;
  const postLinks = posts
    ? posts.map((post, index) => (
        <Link
          className='cursor-pointer'
          href='/post/[slug]'
          as={`/post/${post.slug.current}`}
          key={post.slug.current}
        >
          <span key={index} className=''>
            <span>
              <h2>{post.title}</h2>
            </span>
          </span>
        </Link>
      ))
    : null;
  return (
    <div className='container mt-8'>
      <div>
        <h2 className='text-3xl font-semibold mb-8'>Posts</h2>
        <span>I might post something here someday.</span>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await client.fetch(
    groq`*[_type == "post"]|order(publishedAt desc)`
  );

  return {
    props: {
      posts: [],
    },
  };
};

export default post;
