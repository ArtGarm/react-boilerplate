import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: ({ variant, size, fullWidth, disabled, noPadding }) => {
    const variantStyles =
      (disabled && {
        pointerEvents: 'none',
        borderColor: theme.palette.main.grey,
        backgroundColor: theme.palette.main.grey,
        color: theme.palette.asset.grey,
      }) ||
      (variant === 'primary' && {
        borderColor: theme.palette.main.orange,
        backgroundColor: theme.palette.main.orange,
        color: theme.palette.main.black,
        '&:hover': {
          backgroundColor: theme.palette.transparent,
        },
      }) ||
      (variant === 'secondary' && {
        color: theme.palette.main.orange,
        borderColor: theme.palette.main.black,
        backgroundColor: theme.palette.main.black,
        '&:hover': {
          backgroundColor: theme.palette.transparent,
        },
      }) ||
      (variant === 'outlined' && {
        color: theme.palette.main.orange,
        borderColor: theme.palette.main.black,
        backgroundColor: theme.palette.transparent,
        '&:hover': {
          backgroundColor: theme.palette.main.black,
        },
      });

    const sizes = {
      padding:
        (noPadding && '0') ||
        (size === 'small' && theme.spacing(0.25, 2)) ||
        (size === 'large' && theme.spacing(1.25, 4)) ||
        theme.spacing(0.75, 3),
      ...theme.typography.button,
    };
    return {
      display: fullWidth ? 'block' : 'inline-block',
      width: fullWidth ? '100%' : 'auto',
      border: `1px solid ${theme.palette.main.orange}`,
      borderRadius: 5,
      transition: 'all 0.3s',
      ...sizes,
      ...variantStyles,
    };
  },
}));
