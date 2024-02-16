import React, { FC } from 'react';

interface FooterProps {
  title: string;
}

const Footer: FC<FooterProps> = ({ title }) => {
  return (
    <>
      <p>{title}</p>
    </>
  );
};

export default Footer;