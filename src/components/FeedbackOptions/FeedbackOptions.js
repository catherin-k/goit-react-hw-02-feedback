import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  Object.keys(options).map((option) => (
    <button
      className={s.btn}
      type="button"
      name={option}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
