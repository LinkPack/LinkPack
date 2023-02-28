import React from 'react';

function DisplayEntry({link, label} : {link: string, label: string}) {

  return(
    <div className='diplayLinkGroup'>
      <div className='displayLabel'>{label}</div>
      <a className='displayLink' href={'//' + link} target='_blank'>{link}</a>
    </div>
  ); 
}


export default DisplayEntry;