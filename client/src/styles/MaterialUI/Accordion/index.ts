import { Accordion } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const AccordionContainer = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    background: 'white',
    margin: '5px 3px 15px 2px',
    borderRadius: '6px',
    boxShadow: 'var(--card-box-shadow)',
    padding: '0px 5px',
    fontSize: '12px',
    fontFamily: 'var(--font-family)',
    border: 'none !transparent',

    '&:before': {
      display: 'none !important',
    },
  },
})(Accordion);

export default AccordionContainer;
