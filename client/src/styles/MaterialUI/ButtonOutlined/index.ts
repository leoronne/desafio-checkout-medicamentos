import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ButtonOutlined = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    borderRadius: 'var(--border-radius)',
    border: `2px solid var(--color-primary)`,
    outline: 0,
    minWidth: '40px',
    fontFamily: 'var(--font-family)',
    fontSize: '14px',
    fontWeight: 700,
    color: 'var(--color-primary)',
    height: '40px',
    cursor: 'pointer',
    transition: 'var(--transition)',
    '& svg, span': {
      transition: 'var(--transition)',
      color: 'var(--color-primary)',
    },
    '&:hover': {
      transition: 'var(--transition)',
      background: 'var(--color-primary)',
      '& svg, span': {
        transition: 'var(--transition)',
        color: 'white',
      },
    },
    '&:focus': {
      transition: 'var(--transition)',
      background: 'var(--color-primary)',
      '& svg, span': {
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
