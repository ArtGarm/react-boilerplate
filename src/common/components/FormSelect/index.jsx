import React from 'react';
import { TextField, Typography, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import useStyles from './styles';

const FormSelect = ({
  size = 'medium',
  options = [],
  label,
  placeholder,
  field,
  form,
  ...props
}) => {
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
        {...props}
        {...field}
        fullWidth
        select
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
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FormSelect;

FormSelect.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
      ]),
    })
  ),
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
