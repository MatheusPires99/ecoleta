import React from 'react';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return <header>{title}</header>;
};

export default Header;
