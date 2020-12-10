import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, onTotal, onPositivePercentage }) => {
  return (
    <ul className={s.FeedbackStats}>
      <li className={s.stats}>Good: {good}</li>
      <li className={s.stats}>Neutral: {neutral}</li>
      <li className={s.stats}>Bad: {bad}</li>
      <li className={s.stats}>Total: {onTotal}</li>
      <li className={s.stats}>Positive feedback: {onPositivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  onPositivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
