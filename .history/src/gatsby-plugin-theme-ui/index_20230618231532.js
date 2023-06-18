// example theme file
const theme = {
    config: {
        initialColorModeName: 'light',
      },
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
        nav: {
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '15px',
            width: '20%',
            borderRadius: '2px',
            '&:hover': {
                bg: 'primary',
            },
        },
        
    }
}
  
  
  export default theme