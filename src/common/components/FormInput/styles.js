import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  labelRoot: {
    marginBottom: theme.spacing(1),
    transition: 'all 0.3s',
  },
  labelError: {
    color: theme.palette.asset.orange,
  },
  input: {
    padding: theme.spacing(2.125),
    lineHeight: 1.2,
    height: 'auto',
  },
  border: {
    border: `1px solid ${theme.palette.main.black}`,
    transition: 'all 0.3s',
  },
  focus: {
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.main.orange,
    },
  },
  error: {
    color: theme.palette.asset.orange,
  },
  helperText: {
    margin: theme.spacing(1, 0, 0),
    textAlign: 'right',
    ...theme.typography.body1,
  },
}));
