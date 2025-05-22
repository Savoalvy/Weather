export const styles = {
  global: {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: '"Inter", sans-serif',
      fontOpticalSizing: 'auto',
      fontStyle: 'normal'
    },
    'input::placeholder': {
      fontFamily: '"Inter", sans-serif'
    },
    '::-webkit-scrollbar': {
      width: '8px'
    },
    '::-webkit-scrollbar-track': {
      bg: 'rgba(0, 0, 0, 0.04)',
      borderRadius: '8px'
    },
    '::-webkit-scrollbar-thumb': {
      bg: 'rgba(0, 0, 0, 0.16)',
      borderRadius: '8px'
    },
    '::-webkit-scrollbar-button': {
      display: 'none'
    },
    '::-webkit-scrollbar-corner': {
      background: 'transparent'
    },
    body: {
      w: '100vw',
      h: '100vh'
      // fontFamily: '"Inter", sans-serif',
      // fontOpticalSizing: 'auto',
      // fontStyle: 'normal'
    },
    '#root': {
      w: 'inherit',
      h: 'inherit'
    }, // Обновлял root
    'ul, ol': {
      listStyle: 'none'
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
      maxWidth: '100%',
      height: 'auto'
    },
    p: {
      textDecoration: 'none'
    },
    button: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      font: 'inherit'
    },
    'input, textarea': {
      border: 'none',
      outline: 'none',
      font: 'inherit'
    },
    img: {
      userSelect: 'none',
      maxWidth: '100%',
      height: 'auto'
    },
    '.chakra-input': {
      w: '100% !important',
      h: '100% !important'
    }
  }
};
