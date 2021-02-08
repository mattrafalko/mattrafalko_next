import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';
import moment from 'moment';
const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

const Post = (props) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    body = [],
    mainImage,
    _createdAt,
  } = props;

  const timestamp = moment(Date(_createdAt).toString()).format('l');

  return (
    <article className='max-w-sm lg:max-w-2xl px-2 mx-auto mt-4 mb-8'>
      <h1 className='text-3xl font-semibold mb-2 dark:text-gray-200'>
        {title}
      </h1>
      <div className='flex flex-col mb-2'>
        <div className='flex items-center w-full mb-2 justify-between'>
          <div className='flex items-center'>
            <h2 className='text-sm dark:text-gray-200 font-light'>
              {name} • {timestamp}
            </h2>
          </div>
          {categories && (
            <span>
              {categories.map((category) => (
                <span
                  className='px-1 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-500 dark:text-gray-100 font-light text-xs'
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
        id='post'
        className='dark:text-gray-200'
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
  mainImage, 
  _createdAt
}`;

Post.getInitialProps = async function (context) {
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
