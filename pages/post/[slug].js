import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';
import Image from 'next/image';

const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

const Post = (props) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
    mainImage,
  } = props;

  return (
    <article className='max-w-sm lg:max-w-2xl mx-auto mt-6'>
      <h1 className='text-3xl mb-2'>{title}</h1>
      <div className='flex flex-col mb-2'>
        <div className='flex items-center w-full mb-2 justify-between'>
          <div className='flex items-center'>
            {authorImage && (
              <div className='rounded-full h-5 w-5 overflow-hidden'>
                <img src={urlFor(authorImage).url()} />
              </div>
            )}
            <h2 className='ml-2 text-xs'>{name}</h2>
          </div>
          {categories && (
            <span>
              {categories.map((category) => (
                <span
                  className='px-1 py.1 bg-gray-200 rounded text-gray-500 text-xs'
                  key={category}
                >
                  {category}
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
      <img
        src={urlFor(mainImage).url()}
        alt='Author is Kap'
        className='w-full h-auto mb-3'
      />
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
