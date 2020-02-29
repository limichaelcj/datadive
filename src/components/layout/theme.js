import chroma from 'chroma-js';

// chroma config
const scaleSoft = .25;

// colors
const black = '#111';
const white = '#fff';
const primary = '#f2f2f2';

export default {
  black,
  white,
  primary,
  text: black,
  background: chroma(white).darken(scaleSoft),
  paper: white,
}
