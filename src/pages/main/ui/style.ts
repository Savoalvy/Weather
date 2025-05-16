export const style = {
  wrapper: {
    gap: '20px',
    gridArea: 'content',
    display: 'grid',
    gridTemplateAreas: `
      'side map'
      'side card'
    `,
    gridTemplateColumns: '300px 3fr',
    gridTemplateRows: '1fr 300px'
  },

  sideArea: {
    gridArea: 'side',
    border: '1px solid black'
  },

  mapArea: {
    gridArea: 'map',
    border: '1px solid black'
  },

  cardArea: {
    gridArea: 'card',
    border: '1px solid black'
  }
};
