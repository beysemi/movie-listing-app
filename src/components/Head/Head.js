import NextHead from 'next/head';
import React from 'react';

const Head = ({ title, description, image, type }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          image
            ? image
            : image
        }
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type || 'website'} />
      <meta
        property="og:image"
        content={
          image
            ? image
            : image
        }
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap-grid.css"></link>
    </NextHead>
  )
}

export default Head;
