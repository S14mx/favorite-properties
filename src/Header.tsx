import React, { FC } from 'react';

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default Header;