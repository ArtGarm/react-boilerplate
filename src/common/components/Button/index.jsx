import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';

import useStyles from './styles';

const Button = ({
  variant = 'primary',
  size = 'medium',
  noPadding,
  fullWidth,
  disabled,
  href,
  to,
  children,
  onClick = () => {},
}) => {
  const classes = useStyles({ fullWidth, disabled, variant, size, noPadding });
  const config =
    (href && {
      href,
      component: 'a',
      rel: 'noreferrer',
      target: '_blank',
    }) ||
    (to && {
      to,
      component: Link,
    }) ||
    null;

  return (
    <ButtonBase className={classes.root} {...config} onClick={onClick}>
      {children}
    </ButtonBase>
  );
};

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  noPadding: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
