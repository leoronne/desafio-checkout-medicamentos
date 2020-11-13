import { Menu } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const MenuContainer = withStyles({
  paper: {
    top: '0 !important',
    marginTop: '95px',
    minWidth: '220px !important',
    maxWidth: '350px',
    marginLeft: '-40px !important',
    backgroundColor: 'var(--menu-background)',
    fontSize: '14px !important',
  },
  list: {
    padding: '10px',
    fontFamily: 'var(--font-family)',
    '& ul, span, a': {
      fontSize: '14px !important',
      fontFamily: 'var(--font-family)',
      color: 'white',
      textDecoration: 'none !important',
    },

    '& li': {
      padding: '10px',
      '& .MuiInput-underline:before, .MuiInput-underline:after': {
        borderBottom: 'transparent !important',
      },

      '& .MuiSelect-icon': {
        padding: '5px',
        marginLeft: '3px',
        color: 'white !important',
        top: 'calc(50% - 16px)',
        marginRight: '-10px',
      },
      '& a': {
        textDecoration: 'none',
      },
      '&:hover': {
        backgroundColor: 'var(--menu-hover)',
      },
    },
  },
})(Menu);

export default MenuContainer;
