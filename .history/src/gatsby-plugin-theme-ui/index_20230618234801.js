// example theme file
const theme = {
    config: {
        initialColorModeName: 'light',
      },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        highlight: '#efeffe',
        modes: {
            dark: {
            text: '#fff',
            background: '#000',
            primary: '#0cf',
            }
        }
    },
    links: {
        nav: {
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '15px',
            width: '20%',
            borderRadius: '2px',
            '&:hover': {
                bg: 'highlight',
            },
        },       
    },
    layout: {
        container: {
            border: '1px solid rgba(0, 0, 0, 0.12)'
        }
    }
}
  
  
  export default theme