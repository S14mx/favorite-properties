import React, { FC } from 'react';

interface IFooterProps {
  title: string;
}

const Footer: FC<IFooterProps> = ({ title }) => {
  return (
    <>
      <p>{title}</p>
    </>
  );
};

export default Footer;