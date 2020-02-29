import chroma from 'chroma-js';

// chroma config
const scaleSoft = .2;
const scaleAlpha = {
  vl: .1,
  lt: .3,
  md: .5,
  st: .7,
  vs: .9,
}
const getAlphaLevels = (color) => {
  const scale = Object.entries(scaleAlpha);
  const alphas = {};
  scale.forEach(([k,v]) => {
    alphas[k] = chroma(color).alpha(v);
  });
  return alphas;
}
const makePalette = (color) => {
  return ({
    main: color,
    light: chroma(color).brighten(),
    dark: chroma(color).darken(),
    alpha: getAlphaLevels(color),
  });
}

// colors
const black = '#111';
const white = '#fff';
const primary = '#2C949A';

export default {
  black,
  white,
  primary: makePalette(primary),
  alpha: {
    black: getAlphaLevels(black),
    white: getAlphaLevels(white),
  },
  text: makePalette(black),
  font: {
    main: "'Roboto', sans-serif",
  },
  background: {
    main: chroma(white).darken(scaleSoft),
    dark: chroma(white).darken(scaleSoft * 2),
    light: white,
  },
  shadow: {
    sm: `.1rem .1rem 1rem -.5rem ${chroma(black).alpha(.2)}`,
    md: `.2rem .2rem 1.4rem -.7rem ${chroma(black).alpha(.4)}`,
    lg: `.3rem .3rem 1.8rem -.9rem ${chroma(black).alpha(.6)}`,
  },
  transition: {
    button: '100ms ease-out',
  },
}
