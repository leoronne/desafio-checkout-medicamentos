import { AccordionDetails } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const AccordionDetailsContainer = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '& .pharmacy-card': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottom: '1px solid var(--border-color)',
      padding: '10px',
      '& .info': {
        width: '100%',
        marginLeft: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& p': {
          fontWeight: 500,
        },
        '& span': {
          color: 'var(--color-primary)',
        },
      },
      '& .icon svg': {
        width: '15px',
        height: '15px',
      },
    },
    // '& .pharmacy-card + .pharmacy-card': {
    //   marginTop: '10px',
    // },
  },
})(AccordionDetails);

export default AccordionDetailsContainer;
