import { createGlobalStyle } from "styled-components";
import PretendardExtraBold from "../assets/fonts//Pretendard-ExtraBold.woff2";
import PretendardBold from "../assets/fonts//Pretendard-Bold.woff2";
import PretendardSemiBold from "../assets/fonts//Pretendard-SemiBold.woff2";
import PretendardRegular from "../assets/fonts/Pretendard-Regular.woff2";
import PretendardLight from "../assets/fonts/Pretendard-Light.woff2";
import PretendardExtraLight from "../assets/fonts/Pretendard-ExtraLight.woff2";
import PretendardThin from "../assets/fonts/Pretendard-Thin.woff2";

export const basicStyles = {
  maxWidth: 1440 * (window.screen.width / 1440),
  maxHeight: window.screen.height,
  basicFont: 16 * (window.screen.width / 1440),
};

export default createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: local("Pretendard-ExtraBold"), url(${PretendardExtraBold}) format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("Pretendard-Bold"), url(${PretendardBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("Pretendard-SemiBold"), url(${PretendardSemiBold}) format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("Pretendard-Regular"), url(${PretendardRegular}) format("woff2");
    font-weight: 400;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("Pretendard-Light"), url(${PretendardLight}) format("woff2");
    font-weight: 300;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("Pretendard-ExtraLight"), url(${PretendardExtraLight}) format("woff2");
    font-weight: 200;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("Pretendard-Thin"), url(${PretendardThin}) format("woff2");
    font-weight: 100;
  }

  :root {
    --extra-light: #E9F4F4;
    --light: #DEEDED;
    --semi-light: #D6EEEE;
    --regular: #C4DFDF;
    --medium: #C4DFDF;
    --main: #B2D2D2;
    --semi-dark: #A4CCCC;
    --dark: #97C7C7;
    --extra-dark: #97C7C7;
    font-size: ${`${basicStyles.basicFont}px`};
  }

  *{
    font-family: 'Pretendard';
    font-weight: '300';
    /* box-shadow : 0 0 0 1px purple inset; */

    ::-webkit-scrollbar {
     display: none;
    }
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  
`;
