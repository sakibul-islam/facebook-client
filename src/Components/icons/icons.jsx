import styled, { css } from 'styled-components';
import icons2 from './icons2.png';
import icons1 from './icons1.png';
import icons3 from './icons3.png';

const icons2Styles = css`
  width: 18px;
  height: 18px;
  background-image: url(${icons2});
  filter: invert(0.39) sepia(0.12);
`;
const icons1Styles = css`
  height: 24px;
  width: 24px;
  background-image: url(${icons1});
`;

const icons3Styles = css`
  height: 18px;
  width: 18px;
  background-image: url(${icons3});
`;

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



export const LiveVideoIcon = styled.i`
  ${icons1Styles}
  background-position: 0 190px;
`;

export const PhotoVideoIcon = styled.i`
  ${icons1Styles}
  background-position: 0 114px;
`;

export const FeelingActivityIcon = styled.i`
  ${icons1Styles}
  background-position: 0 164px;
`;

export const CrossIcon = styled.i`
  ${icons3Styles}
  background-position: 1px 74px;
`;