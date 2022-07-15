import styled from '@emotion/styled'

export const SearchBoxStyle = styled('div')(() => {
  return {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    '.MuiInput-root': {
      border: '1px solid rgba(198, 208, 235, 0.5)',
      borderRadius: '3.125rem',

      '&::before': {
        content: 'none'
      },

      '&::after': {
        content: 'none'
      },

      '&:hover': {
        borderColor: '#c6d0eb'
      },

      '&:focus-within': {
        borderColor: '#c6d0eb'
      },

      input: {
        flex: 1,
        fontSize: '1rem',
        fontWeight: 300,
        color: '#c6d0eb',
        padding: '0.375rem 1.25rem',
        transformOrigin: 'center left',
        transform: 'scale(0.875)',

        '&::placeholder': {
          opacity: 0.5
        }
      },

      '.MuiInputAdornment-root': {
        padding: '0.75rem',

        button: {
          background: 'transparent'
        },

        svg: {
          fontSize: '1rem'
        },

        '.MuiTouchRipple-root': {
          display: 'none'
        }
      }
    },
  }
})
