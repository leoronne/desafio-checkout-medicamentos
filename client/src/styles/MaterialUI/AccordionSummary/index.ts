import { AccordionSummary } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const AccordionSummaryContainer = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100% !important',
  },
})(AccordionSummary);

export default AccordionSummaryContainer;
