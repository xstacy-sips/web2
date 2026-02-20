import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="page-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default PageHeader;
