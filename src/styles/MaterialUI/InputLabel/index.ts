import { InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const InputLabelContainer = withStyles({
  root: {
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    transition: 'var(--transition-slow)',
    '&:hover': {
      color: 'var(--color-primary-lighter)',
      transition: 'var(--transition-slow)',
    },
    '&:focus': {
      color: 'var(--color-primary-lighter)',
      transition: 'var(--transition-slow)',
    },
    '& .Mui-focused': {
      color: `var(--color-primary-lighter) !important`,
    },
  },
  focused: {
    color: `var(--color-primary-lighter) !important`,
    borderColor: 'var(--color-primary-lighter)',
    transition: 'var(--transition-slow)',
  },
  outlined: {
    borderColor: 'var(--color-primary-lighter)',
    transition: 'var(--transition-slow)',
    '& .Mui-focused': {
      color: `var(--color-primary-lighter) !important`,
    },
  },
})(InputLabel);

export default InputLabelContainer;
