import styled from '@emotion/styled'

export const UserTableStyle = styled('div')(() => {
  return {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    background: '#1c2134',
    '.table-pagination': {
      marginTop: '4rem',
      background: '#22283f',
      borderRadius: '50px',
      padding: '0.625rem 0.25rem',
      button: {
        minWidth: '1.75rem',
        height: '1.75rem'
      }
    },

    '.data-table': {
      marginTop: '1rem',
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

              '&:first-of-type': {
                width: '36%',
                paddingLeft: '3.5rem'
              },

              '&:last-of-type': {
                paddingRight: '3.5rem'
              }
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

              '&:first-of-type': {
                paddingLeft: '3.5rem'
              },

              '&:last-of-type': {
                paddingRight: '3.5rem'
              },

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
