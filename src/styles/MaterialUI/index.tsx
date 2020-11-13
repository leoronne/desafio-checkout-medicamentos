import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  selectOptions: {
    '& ul': {
      color: 'var(--text-color)',
    },
    '& li': {
      fontSize: 14,
      fontFamily: 'var(--font-family) !important',
    },
  },
});

export { default as Select } from './Select';
export { default as MenuContainer } from './MenuContainer';
export { default as TextField } from './TextField';
export { default as ButtonOutlined } from './ButtonOutlined';
export { default as StyledCheckbox } from './StyledCheckbox';
export { default as FormControl } from './FormControl';
export { default as InputLabel } from './InputLabel';
