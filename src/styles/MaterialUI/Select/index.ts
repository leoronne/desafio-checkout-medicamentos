import { Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const SelectComponent = withStyles({
  root: {
    backgroundColor: 'transparent',
    borderBottom: 'transparent !important',
    fontFamily: 'var(--font-family)',
    transition: 'var(--transition)',

    '&:focus': {
      backgroundColor: 'transparent',
    },

    '&.MuiInput-underline:after': {
      borderBottom: 'transparent !important',
    },

    '& span': {
      display: 'none',
    },

    '& .MuiSelect-icon': {
      padding: '5px',
      marginLeft: '3px',
      color: 'white !important',
      top: 'calc(50% - 16px)',
      marginRight: '-10px',
    },

    '& p': {
      fontFamily: 'var(--font-family)',
      color: 'white',

      fontSize: '14px !important',
      fontWeight: 400,
    },
  },
})(Select);

export default SelectComponent;
