import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ButtonOutlined = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'transparent',
    borderRadius: 'var(--border-radius)',
    border: `2px solid var(--color-primary)`,
    outline: 0,
    minWidth: '40px',
    fontFamily: 'var(--font-family)',
    fontWeight: 700,
    color: 'var(--color-primary)',
    // height: '40px',
    cursor: 'pointer',
    transition: 'var(--transition)',
    textTransform: 'none',
    '& p': {
      fontSize: '16px',
    },
    '& .MuiButton-label': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      '& span': {
        fontSize: '13px',
        color: 'var(--color-primary-lighter)',
      },
    },
    '& svg, span, p': {
      transition: 'var(--transition)',
      color: 'var(--color-primary)',
    },
    '&:hover': {
      transition: 'var(--transition)',
      background: 'var(--color-primary)',
      '& svg, span, p': {
        transition: 'var(--transition)',
        color: 'white',
      },
      '& span': {
        color: 'var(--grey) !important',
      },
    },
    '&:focus': {
      transition: 'var(--transition)',
      background: 'var(--color-primary)',
      '& svg, span, p': {
        transition: 'var(--transition)',
        color: 'white',
      },
    },
    '&:disabled': {
      color: 'var(--disabled)',
      border: '2px solid var(--disabled)',
      cursor: 'not-allowed',
    },
    '& .MuiButton-label div': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
})(Button);

export default ButtonOutlined;
