// example theme file
const theme = {
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        modes: {
            dark: {
            text: '#fff',
            background: '#000',
            primary: '#0cf',
            }
        }
    },
    links: {
        bold: {
          fontWeight: 'bold',
        },
        nav: {
            px: 2,
            py: 1,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }
      },
    flex: {
        bg: 'primary'
    },
    alerts: {
        primary: {
          color: 'background',
          bg: 'primary',
        },
        muted: {
          color: 'red',
          bg: 'muted',
        },
      },
  }
  
  export default theme