import React from 'react';
// import s from './FeedbackOption.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <div className="FeedbackBtns" key={index}>
      <button
        type="button"
        className="FeedBtn"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    </div>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
