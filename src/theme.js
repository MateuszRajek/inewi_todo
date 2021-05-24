const theme = {
    space: [
      0,
      4,
      8,
      16,
      32,
      64,
      128,
      256,
      512
    ],
    fonts: {
      body: 'Open Sans, sans-serif',
      heading: 'Poppins, sans-serif',
      monospace: 'Menlo, monospace'
    },
    fontSizes: [
      12,
      14,
      16,
      20,
      24,
      32,
      48,
      64,
      96
    ],
    sizes: {
      container: '100%'
    },
    layout: {
      container: {
          margin: '20px auto'
      }
    },
    fontWeights: {
      body: 400,
      heading: 600,
      bold: 800
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#07c',
      secondary: '#30c',
      muted: '#f6f6f6'
    },
    styles: {
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
      },
      h1: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 5
      },
      h2: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 4
      },
      h3: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 3
      },
      h4: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 2
      },
      h5: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 1
      },
      h6: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 0
      },
      p: {
        color: 'text',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body'
      },
      a: {
        color: 'primary'
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit'
        }
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit'
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0
      },
      th: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
      },
      td: {
        textAlign: 'left',
        borderBottomStyle: 'solid'
      },
      img: {
        maxWidth: '100%'
      },
      progress: {
        color: '#e89e9e',
      }
    },
    cards: {
        primary: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          padding: 2,
          margin: 2,
          borderRadius: 4,
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        },
      },
    buttons: {
      primary: {
        margin: '5px',
        cursor: 'pointer',
      }
    },
    forms: {
      input: {
        textTransform: 'upperCase',
        boxShadow: '0 0 8px rgb(0 0 0 / 13%)',
        border: 'none'
      }
    },
    
  }

  export default theme