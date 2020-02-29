import chroma from 'chroma-js';

// chroma config
const scaleSoft = .2;

// colors
const black = '#111';
const white = '#fff';
const primary = '#2C949A';

export default {
  black,
  white,
  primary,
  text: black,
  background: chroma(white).darken(scaleSoft),
  paper: white,
  shadow: {
    sm: `.1rem .1rem 1rem -.5rem ${chroma(black).alpha(.2)}`,
    md: `.2rem .2rem 1.4rem -.7rem ${chroma(black).alpha(.4)}`,
    lg: `.3rem .3rem 1.8rem -.9rem ${chroma(black).alpha(.6)}`,
  },
  transition: {
    button: '100ms ease-out',
  },
}
