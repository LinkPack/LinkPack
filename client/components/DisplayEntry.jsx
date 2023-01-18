import React from 'react';

function DisplayEntry({link, label}) {

  return(
    <div>
      <div>{label}</div>
      <a href={'//' + link} target='_blank'>{link}</a>
    </div>
  ); 
}


export default DisplayEntry;