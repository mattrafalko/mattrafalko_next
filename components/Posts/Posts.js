import React from 'react';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

const Posts = (props) => {
  const { posts = [] } = props;

  return (
    <div>
      <h2>Blog Posts</h2>

      <div>
        {posts &&
          posts.map((post, index) => (
            <Link
              href='/post/[slug]'
              as={`/post/${post.slug.current}`}
              key={post.slug.current}
            >
              <span key={index}>
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Posts;
