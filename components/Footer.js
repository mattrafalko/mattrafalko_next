import { Fragment } from 'react';
import Email from '../assets/icons/email.svg';
import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import { motion } from 'framer-motion';
import { userData } from '../Config';

const Footer = () => {
  const icons = { email: Email, linkedIn: Linkedin, github: Github };
  const { links } = userData;

  const items = Object.keys(icons).map((x) => {
    return { link: links[x], icon: icons[x], name: x };
  });

  const footerIcons = items.map((item, i) => (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} key={i}>
      <a href={item.link} target='_blank' rel='noreferrer'>
        <div className='flex flex-col items-center'>
          <item.icon className='mb-0.5' />
          <div className='text-gray-900 dark:text-indigo-400 text-xs'>
            {item.name}
          </div>
        </div>
      </a>
    </motion.div>
  ));

  return (
    <Fragment>
      <div className='bg-gray-100 dark:bg-gray-900 fixed bottom-0 px-5 py-2 w-full flex border-t-2 dark:border-indigo-900'>
        <div className='max-w-2xl w-full flex justify-between mx-auto pb-1'>
          {footerIcons}
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
