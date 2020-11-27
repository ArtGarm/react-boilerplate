import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import useStyles from './styles';

const FormSelect = ({ size = 'medium', label, placeholder, field, form }) => {
  const classes = useStyles();

  const error = get(form, `errors.${field.name}`, false);
  const touched = get(form, `touched.${field.name}`, false);

  return (
    <div className={classes.container}>
      {label && (
        <Typography
          variant="h5"
          color={error && touched ? 'error' : 'initial'}
          classes={{
            root: classes.labelRoot,
            colorError: classes.labelError,
          }}
        >
          {label}
        </Typography>
      )}
      <TextField
        {...field}
        fullWidth
        size={size}
        variant="outlined"
        error={!!touched && !!error}
        helperText={touched && error}
        placeholder={placeholder}
        classes={{
          root: classes.focus,
        }}
        InputProps={{
          classes: {
            input: classes.input,
            notchedOutline: classes.border,
            error: classes.error,
          },
        }}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
          },
        }}
      />
    </div>
  );
};

export default FormSelect;

FormSelect.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small']),
  field: PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  form: PropTypes.shape({
    errors: PropTypes.shape(),
    touched: PropTypes.shape(),
  }),
};
