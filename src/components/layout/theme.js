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
  shadow: chroma(black).alpha(.2),
  paper: white,
}
