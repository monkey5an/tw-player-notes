import * as React from 'react';

// Updated Anchor tag so that relative links do not open in a new tab
const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    if (props.href[0] == "/") {
      return (
        <a href={props.href} rel="noopener noreferrer">
          {link}
        </a>
      );
    } else {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      );
    }
  } else {
    return null;
  }
};

export default AnchorTag;
