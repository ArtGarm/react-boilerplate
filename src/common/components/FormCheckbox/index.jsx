import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import useStyles from './styles';

const FormCheckbox = ({ label, round, field, form }) => {
  const { value, ...checkbox } = field;
  const error = get(form, `errors.${field.name}`, false);
  const touched = get(form, `touched.${field.name}`, false);

  const classes = useStyles({ error: !!(touched && error), round });

  return (
    <FormControlLabel
      control={
        <Checkbox
          {...checkbox}
          disableRipple
          checked={value}
          checkedIcon={<span className={classes.checkedIcon} />}
          icon={<span className={classes.icon} />}
        />
      }
      label={label}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    />
  );
};

export default FormCheckbox;

FormCheckbox.propTypes = {
  round: PropTypes.bool,
  label: PropTypes.string,
  field: PropTypes.shape({
    value: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  form: PropTypes.shape({
    errors: PropTypes.shape(),
    touched: PropTypes.shape(),
  }),
};
