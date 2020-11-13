import { FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const FormControlContainer = withStyles({
  root: {
    fontSize: '14px',
    fontFamily: 'var(--font-family)',
    transition: 'var(--transition-slow)',
    borderWidth: '1px !important',
    height: '40px !important',
    width: '100%',
    '&:hover': {
      borderColor: `var(--color-primary-lighter) !important`,
      transition: 'var(--transition-slow)',
    },
    '& .MuiSelect-root': {
      paddingTop: '10px',
      paddingBottom: '10px',
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px !important',
      borderColor: `var(--color-primary-lighter) !important`,
      transition: 'var(--transition-slow)',
    },
    '& .MuiOutlinedInput-root fieldset': {
      borderWidth: '1px !important',
      transition: 'var(--transition-slow)',
    },
    '& .MuiOutlinedInput-root:hover fieldset': {
      borderColor: `var(--color-primary-lighter) !important`,
      transition: 'var(--transition-slow)',
    },
    '& .MuiFormLabel-root': {
      fontWeight: 500,
      transform: 'translate(14px, 13px) scale(1) !important',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '80%',
    },
    '& .MuiSelect-icon': {
      top: '0 !important',
      height: '100%',
    },
    '& .MuiFormLabel-root.MuiInputLabel-shrink': {
      color: 'rgba(0, 0, 0, 0.38)',
      transform: 'translate(14px, -10px) scale(0.75) !important',
    },
  },
})(FormControl);

export default FormControlContainer;
