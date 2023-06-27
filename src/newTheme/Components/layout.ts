import { OverridesStyleRules } from '@mui/material/styles/overrides';

import { Props } from './components';

export const layout = ({ palette, typography }: Props): OverridesStyleRules => ({
  MuiDataGrid: {
    defaultProps: {
      disableColumnFilter: true,
      disableVirtualization: true,
      pagination: true,
    },
    styleOverrides: {
      root: {
        cursor: 'pointer',
        height: 700,
        width: '100%',
        border: 'none',
        '& .MuiDataGrid-cell--editing': {
          backgroundColor: 'rgb(255,215,115, 0.19)',
          color: '#1a3e72',
          '& .MuiInputBase-root': {
            height: '100%',
          },
        },
        '& .MuiDataGrid-columnHeaders': {
          border: 'none',
          color: palette?.grey[500],
          fontSize: typography?.bodyLight.fontSize,
        },
        '& .MuiDataGrid-iconButtonContainer': {
          '& .MuiButtonBase-root': {
            '&:focus': {
              '& .MuiSvgIcon-root': {
                color: palette?.primary.main,
              },
            },
          },
        },
        '& .MuiDataGrid-footerContainer': {
          border: 'none',
          fontSize: typography?.bodyLight.fontSize,
          '& .MuiTablePagination-root': {
            color: palette?.grey[400],
            fontSize: typography?.bodyLight.fontSize,

            '& .MuiSvgIcon-root': {
              color: palette?.grey[400],
            },
            '& .MuiTablePagination-actions': {
              '& .Mui-disabled': {
                '& .MuiSvgIcon-root': {
                  color: palette?.grey[600] + '!important',
                },
              },
            },
          },
        },
        '& .MuiDataGrid-row': {
          backgroundColor: palette?.background.paper,
          '&:hover': {
            backgroundColor: palette?.grey[800],
          },
        },
        '& .MuiDataGrid-cell': {
          borderColor: palette?.grey[800],
          color: palette?.grey[200],
          '& .MuiButtonBase-root': {
            '&:hover': {
              backgroundColor: palette?.primary.light,
              color: palette?.primary.light,
              '& .MuiSvgIcon-root': {
                color: palette?.primary.light,
              },
            },
          },
        },
        '& .MuiInputBase-root': {
          height: '100%',
          m: 0,
          position: 'relative',
          '&.MuiInput-underline': {
            '& .MuiSvgIcon-root': {
              color: palette?.grey[300] + ' !important',
            },
          },
          '& .MuiButtonBase-root': {
            '&:hover': {
              backgroundColor: palette?.primary.A10 + ' !important',
              '& .MuiSvgIcon-root': {
                color: palette?.primary.light + ' !important',
              },
            },
          },
          '&:hover': {
            '&:not(.Mui-disabled, .Mui-error)': {
              '&:before': {
                borderBottom: `2px solid ${palette?.primary.main} !important`,
              },
            },
          },
        },
        '& .Mui-error': {
          // backgroundColor: `rgb(126,10,15, ${
          //   palette?.mode === "dark" ? 0 : 0.1
          // })`,
          color: palette?.error.main,
        },
        '& .MuiDataGrid-overlay': {
          color: palette?.grey[400],
        },
        '& .MuiDataGrid-columnHeader': {
          '&:hover': {
            "& .MuiDataGrid-columnHeaderDraggableContainer": {
              '& .MuiDataGrid-menuIcon': {
                '& .MuiButtonBase-root': {
                  '& .MuiSvgIcon-root': {
                    color: palette?.grey[500],
                  },
                },
              },
              '& .MuiDataGrid-columnHeaderTitleContainer': {
                '& .MuiDataGrid-iconButtonContainer': {
                  '& .MuiButtonBase-root': {
                    '& .MuiSvgIcon-root': {
                      color: palette?.grey[500],
                    },
                  },
                },
              },
            },
            '& .MuiDataGrid-columnSeparator': {
              '& .MuiSvgIcon-root': {
                color: palette?.grey[500],
              },
            },
          },
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            '& .MuiDataGrid-iconButtonContainer': {
              '& .MuiButtonBase-root': {
                '& .MuiSvgIcon-root': {
                  color: palette?.grey[500],
                },
              },
            },
          }
        }
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        transition: '0.2s',
        fontSize: '15px',
        color: palette?.grey[300],
        zIndex: 9,
        flexDirection: 'row',
        gap: '0.5rem',
        fontWeight: '800',
        minWidth: '100px',
        padding: '0 1.5rem',
        '&:hover': {
          background: palette?.primaryBase[900],
          color: palette?.primary.main,
          borderBottom: '2px solid',
          borderColor: palette?.primary.light,
          '& .MuiSvgIcon-root': {
            color: palette?.primary.main,
          },
        },
        '&.Mui-selected': {
          color: palette?.primary.main,
          background: palette?.primaryBase[900],
          outline: 'none',
        },
        '& .MuiChip-root': {
          borderRadius: '5px',
          width: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '22px',
          '& .MuiChip-label': {
            padding: '0',
            fontSize: '0.7rem',
            fontWeight: '800',
            color: '#fff',
          },
        },
        '& .MuiSvgIcon-root': {
          margin: 0,
          color: palette?.primary.main,
        },
      },
    },
  },
  MuiTabs: {
    defaultProps: {
      variant: 'scrollable',
      scrollButtons: 'auto',
      allowScrollButtonsMobile: true,
    },
    styleOverrides: {
      root: {
        borderBottom: '1px solid',
        borderColor: palette?.grey[800],
        backgroundColor: palette?.background.paper,
        '& button': {
          paddingLeft: 20,
          paddingRight: 20,
        },
        '& .MuiTabScrollButton-root': {
          transition: '0.2s',
          color: palette?.primary.main,
          '&:hover': {
            color: palette?.primary.light,
          },
        },
        '& .MuiTabScrollButton-root.Mui-disabled': {
          opacity: 1,
          color: palette?.grey[700],
        },
        '& .MuiTabs-indicator': {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: palette?.primary.light,
          zIndex: 10,
          bottom: -1,
          height: 3,
        },
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        '& .react-tel-input': {
          border: '1px solid',
          borderColor: palette?.grey[700],
          borderRadius: '7px',
          margin: '1px',
          '&.disabled': {
            borderColor: palette?.grey[800],
            "&:hover": {
              borderColor: palette?.grey[800],
            }
          },
          '&:hover:not(.disabled)': {
            borderColor: palette?.primary.main + ' !important',
          },
          '&:focus-within': {
            margin: 0,
            border: '2px solid',
            borderColor: palette?.primary.main + ' !important',
          },
          '& .form-control': {
            width: '100%',
            minHeight: '44px',
            color: palette?.grey[300],
            fontWeight: 700,
            fontFamily: 'Causten',
            border: 'none',
            '&.invalid-number': {
              border: 'none',
              background: 'none',
              '&:focus': {
                border: 'none',
                background: 'none',
              },
            },
            '&:disabled': {
              color: palette?.grey[700],
            }
          },
          '& .flag-dropdown': {
            border: 'none',
            borderRadius: '6px 0 0 6px',
            '&:hover': {
              borderRadius: '6px 0 0 6px',
              '& .selected-flag': {
                borderRadius: '6px 0 0 6px',
              },
            },
          },
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        '& .MuiDivider-root': {
          borderColor: palette?.grey[800],
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        padding: '2rem !important',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      root: {
        '&.sidebar': {
          flexShrink: 0,
          width: '270px',
          '& .MuiDrawer-paper': {
            backgroundColor: palette?.background.surface1,
            color: 'grey.100',
            padding: '30px 20px',
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',

            '& .sidebar-logo': {
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              marginTop: '40px',
              marginBottom: '24px',
              '&:hover': { cursor: 'pointer' },
              '& svg': {
                width: '100%',
                height: 'auto',
                maxWidth: '100px',
              },
            },

            '& .MuiList-root': {
              width: 270,
              paddingTop: '3.5rem',
              '& .MuiListItem-root': {
                padding: '0',
                transition: '0.2s',
                '&:hover': {
                  backgroundColor: palette?.primaryBase[300],
                },
                '& .MuiListItemIcon-root': {
                  color: palette?.grey[900],
                  minWidth: 'auto',
                },
              },
            },
          },
        },
      },
    },
  },
  MuiTabPanel: {
    styleOverrides: {
      root: {
        padding: 0,
        paddingTop: '1rem',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      vertical: {
        marginRight: 10,
        marginLeft: 10,
      },
      middle: {
        marginTop: 10,
        marginBottom: 10,
        width: '80%',
      },
    },
  },
});
