import React from 'react';
import { Link, useMatches } from 'react-router-dom';

import './styles.css'

const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  return (
    <div className='breadcrumbs'>
      {crumbs[0].map(crumb => (
        <>
          {
            crumb.path ?
              <Link className='breadcrumbs__link' to={crumb.path}>{`${crumb.title} /`}</Link> 
              :
              
              <div className='breadcrumbs__link breadcrumbs__link--disabled'> {crumb.title}</div>
          }
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
