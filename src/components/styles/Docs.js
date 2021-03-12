import styled from '@emotion/styled';
import background from '../images/papel-journal.jpg';

export const StyledHeading = styled('h1')`
  font-size: 2.488rem;
  font-family: 'Mr. Eaves Small Caps', serif;
  line-height: 2.5rem;
  font-weight: 400;
  border-left: 0px solid #554263;
  color: #554263 !important;
  padding: 0;
  flex: 1;
  margin-top: 0;
  padding-top: 0;
  color: ${props => props.theme.colors.heading};
`;

export const Edit = styled('div')`
  padding: 1rem 1.5rem;
  text-align: right;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: #555;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`;

export const StyledMainWrapper = styled.div`
  max-width: 750px;
  color: ${props => props.theme.colors.text};

  ul,
  ol {
    -webkit-padding-start: 40px;
    -moz-padding-start: 40px;
    -o-padding-start: 40px;
    margin: 16px 0px 24px 0px;
    padding: 0px 0px 0px 2em;

    li {
      font-size: 1rem;
      line-height: 1.75;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }

// Clean up space between lists

  p + ul, p + ol {
    margin-top: -18px;
  }

 li ul, li ol {
    margin-top: 0.5rem;
  }

  li > ol {
    margin-bottom: 0.5rem;
  }

  li > ul {
    margin-bottom: 0.5rem;
  }
  
  ul + p {
    margin-top: 16px;
  }

  p:first-of-type:first-letter {
    float: left;
    font-family: 'Solbera Imitation';
    font-size: 5.16rem;
    font-weight: 400 !important;
    color: #412258 !important;
    line-height: 5.16rem;
    margin-right: 0.25rem;
  }

  blockquote {
    color: #484848 !important;
    font-size: 0.98rem;
    box-shadow: 1px 4px 14px #888;
    background-image: url(${ background }) !important;
    background-size: fit !important;
  }

  blockquote > p:first-of-type:first-letter {
    float: none;
    font-family: 'Scaly Sans', serif;
    font-size: 1rem;
    font-weight: 400 !important;
    color: #3B454E !important;
    line-height: 1.75;
    margin-bottom: 0px;
    margin-right: 0px;
  }

  blockquote > h3, blockquote > h4 {
    color: # 585858 !important;
    font-family: 'Scaly Sans';
    font-variant-caps: small-caps;
    border-bottom: 1px solid #cec7c9;
    margin-top: 0.25rem !important;
    margin-left: 0.50rem !important;
  }

  blockquote > h3 {
    font-size: 1.37rem !important;
  }

  a {
    transition: color 0.15s;
    color: ${props => props.theme.colors.link};
    background-color: #f3eef7;
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;
    background: ${props => props.theme.colors.background};
  }

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;
