import { makeStyles } from '@material-ui/core/styles';

const square = {
  position: 'relative',
  width: 26,
  height: 26,
};

export default makeStyles((theme) => ({
  root: {
    width: 'auto',
  },
  label: ({ error }) => ({
    ...theme.typography.h5,
    color: error ? theme.palette.asset.orange : theme.palette.main.black,
  }),
  icon: ({ round, error }) => ({
    ...square,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: round ? '50%' : 0,
      border: `1px solid ${
        error ? theme.palette.asset.orange : theme.palette.main.black
      }`,
    },
  }),
  checkedIcon: ({ round, error }) => ({
    ...square,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: round ? '50%' : 0,
      border: `1px solid ${
        error ? theme.palette.asset.orange : theme.palette.main.black
      }`,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: round ? '50%' : 0,
      width: 14,
      height: 14,
      backgroundColor: error
        ? theme.palette.asset.orange
        : theme.palette.main.orange,
    },
  }),
}));
