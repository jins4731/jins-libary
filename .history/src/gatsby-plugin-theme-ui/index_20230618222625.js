import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import { ThemeUIProvider } from 'theme-ui'

const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
  },
  fontWeights: {
    heading: 700,
  },
  styles: {
    h1: {
      fontSize: 32,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2,
    },
  },
}

function Provider({ children, theme, components }) {
  const componentsWithStyles = useThemedStylesWithMdx(
    useMDXComponents(components)
  )

  return (
    <ThemeUIProvider theme={theme}>
      <MDXProvider components={componentsWithStyles}>{children}</MDXProvider>
    </ThemeUIProvider>
  )
}