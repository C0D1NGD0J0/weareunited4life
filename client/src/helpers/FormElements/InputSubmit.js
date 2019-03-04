import React from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

const InputSubmitBtn = ({ value, btnclass }) => {
  return (
    <React.Fragment>
			<input type="submit" value={value} className={classnames("btn", btnclass)} />
    </React.Fragment>
  );
};

InputSubmitBtn.displayName = 'InputSubmitBtn';

InputSubmitBtn.propTypes = {
    value: PropTypes.string.isRequired,
    btnclass: PropTypes.string.isRequired
};

export default InputSubmitBtn;