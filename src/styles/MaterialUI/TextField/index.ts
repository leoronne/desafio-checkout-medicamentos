import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const TextFieldComponent = withStyles({
  root: {
    width: '100% !important',
    transition: 'var(--transition)',
    color: 'var(--placeholder-color) !important',
    '& .MuiInputLabel-outlined': {
      marginTop: '-6px',
      transition: 'var(--transition-slow)',
      fontWeight: '500',
    },
    '& .MuiInputLabel-animated': {
      fontSize: '15px',
      transition: 'var(--transition) !important',
    },
    '& .MuiInput-underline': {
      fontSize: '14px',
      fontFamily: 'var(--font-family)',
      fontWeight: 500,
      transition: 'var(--transition) !important',
      borderBottom: 'none !important',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid var(--color-primary-lighter)',
      transition: 'var(--transition)',
    },
    '& label.Mui-focused': {
      color: 'var(--color-primary-lighter)',
      fontSize: '14px',
      transition: 'var(--transition)',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):after': {
      borderBottom: '2px solid var(--color-primary-lighter)',
      transition: 'var(--transition)',
    },
    '& .MuiInput-underline:not(.Mui-disabled):after': {
      borderBottom: '2px solid var(--color-primary-lighter)',
      transition: 'var(--transition)',
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: '0px',
    },
    '& .MuiInputBase-input': {
      padding: '10px',
      height: '20px',
      fontSize: '14px',
      fontFamily: 'var(--font-family)',
      transition: 'var(--transition)',
      color: 'var(--text-color)',
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderBottomColor: 'red',
      transition: 'var(--transition)',
    },
    '& .MuiOutlinedInput-root': {
      borderWidth: '1px !important',
      '&:hover fieldset': {
        borderWidth: '1px !important',
        borderColor: 'var(--color-primary-lighter)',
        transition: 'var(--transition)',
      },
      '&:focus fieldset': {
        borderWidth: '1px !important',
        borderColor: 'var(--color-primary-lighter)',
        transition: 'var(--transition)',
      },
      '& fieldset': {
        borderWidth: '1px !important',
        transition: 'var(--transition)',
        borderColor: '#ccc',
      },
      '&.Mui-focused fieldset': {
        borderWidth: '1px !important',
        border: `1px solid var(--color-primary-lighter)`,
        transition: 'var(--transition)',
      },
    },
    '& .MuiFormHelperText-root': {
      border: '0 !important',
      fontFamily: 'var(--font-family)',
      position: 'absolute',
      bottom: 0,
      fontSize: '12px !important',
    },
  },
})(TextField);

export default TextFieldComponent;
