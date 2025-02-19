import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
import { primaryFont } from "./fonts";
import bgImg from "@/assets/hero-bg.svg";

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-transition: 0.3s ease-in-out;
}


*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${primaryFont};
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  scroll-behavior: smooth;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  background-image: url(${bgImg}), linear-gradient( 135deg, ${({ theme }) =>
  theme.colors.mainBgColorFirst} 10%, ${({ theme }) =>
  theme.colors.mainBgColorSecond} 100%);
  background-repeat: no-repeat;
  background-position: 85%;
  line-height: 1.5;
  min-height: 100vh;
  height: 100%;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media(min-width: 1220px) {
  background-position: center;
  background-size: cover;
  }
}

p {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5 {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

li {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: color var(--primary-transition);

    &:hover,
    &:focus {
      outline: none;
    }
}

button {
  font-family: inherit;
  color: currentColor;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background var(--primary-transition), color var(--primary-transition);

    &:hover,
    &:focus {
      outline: none;
    }
}

input, textarea {
  font-family: inherit;
}

img {
  display: block;
  max-width: 100%;
}
`;
