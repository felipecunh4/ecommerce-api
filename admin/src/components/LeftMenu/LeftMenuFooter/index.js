/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por: </span>
        <a href="https://strapi.io" target="_blank" rel="noopener noreferrer">
          Felipe Cunha
        </a>
      </div>
    </Wrapper>
  );
}


export default LeftMenuFooter;
