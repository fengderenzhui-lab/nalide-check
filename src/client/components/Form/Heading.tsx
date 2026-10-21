import styled from '@emotion/styled';
import { TextSizes } from 'client/styles/typography';
import type { ReactNode } from 'react';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  align?: 'left' | 'center' | 'right';
  color?: string;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  inline?: boolean;
  children: ReactNode;
  id?: string;
  className?: string;
  lang?: string;
}

const StyledHeading = styled.h1<HeadingProps>`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  font-size: ${TextSizes.medium};
  img {
    // Some titles have an icon
    width: 2.5rem;
    border-radius: 4px;
  }
  a {
    // If a title is a link, keep title styles
    color: inherit;
    text-decoration: none;
    display: flex;
  }
  ${(props) => {
    switch (props.size) {
      case 'xSmall':
        return `font-size: ${TextSizes.xSmall};`;
      case 'small':
        return `font-size: ${TextSizes.small};`;
      case 'medium':
        return `font-size: ${TextSizes.large};`;
      case 'large':
        return `font-size: ${TextSizes.xLarge};`;
      case 'xLarge':
        return `font-size: ${TextSizes.xLarge};`;
    }
  }};
  ${(props) => {
    switch (props.align) {
      case 'left':
        return 'text-align: left;';
      case 'right':
        return 'text-align: right;';
      case 'center':
        return 'text-align: center; justify-content: center;';
    }
  }};
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.inline ? 'display: inline;' : '')}
`;

// Keeps letters in any language, and leaves the id off if a title has none
const makeAnchor = (title: string): string | undefined =>
  title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, '-') || undefined;

const Heading = (props: HeadingProps): JSX.Element => {
  const { children, as, size, align, color, inline, id, className, lang } = props;
  return (
    <StyledHeading
      as={as}
      size={size}
      align={align}
      color={color}
      inline={inline}
      className={className}
      lang={lang}
      id={id || (typeof children === 'string' ? makeAnchor(children) : undefined)}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
