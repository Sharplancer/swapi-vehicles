import styled from '@emotion/styled'

export const PopUpStyle = styled('div')(() => {
  return {
    position: 'absolute',
    top: '30%',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    '.vehicle-table': {
      borderRadius: '2rem',
      background: '#1c2134',
      width: 'unset',
      padding: '2rem',
      table: {
        borderBottom: `1px solid #22283f`,
        borderCollapse: 'separate',

        thead: {
          tr: {
            th: {
              color: 'white',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '1rem 0.5rem',
              border: 0,

            }
          }
        },

        tbody: {
          tr: {
            '&:first-of-type': {
              marginTop: 0
            },

            'th, td': {
              color: 'white',
              fontSize: '1rem',
              marginTop: 0,
              marginBottom: 0,
              borderTop: `1px solid '#22283f'`,
              borderBottom: `0px solid '#22283f'`,
              padding: '0.5rem',
              p: {
                fontSize: '0.75rem'
              }
            },

            '&:hover': {
              backgroundColor: '#262e4a',

              'th, td': {
                '&:first-of-type': {
                  borderTopLeftRadius: '1rem',
                  borderBottomLeftRadius: '1rem'
                },

                '&:last-child': {
                  borderTopRightRadius: '1rem',
                  borderBottomRightRadius: '1rem'
                }
              }
            },
          }
        }
      }
    }
  }
})
