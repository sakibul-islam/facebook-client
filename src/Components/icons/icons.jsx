import styled, { css } from 'styled-components';
import icons from './icons2.png';

const icons2Styles = css`
  width: 18px;
  height: 18px;
  background-image: url(${icons});
  filter: invert(0.39) sepia(0.12);
`

export const LikeIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -172px;
`;

export const CommentIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -134px;
`;

export const ShareIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -190px;
`;

export const ThreeDotsIcon = styled.i`
  ${icons2Styles}
  background-position: 0 -50px;
`;