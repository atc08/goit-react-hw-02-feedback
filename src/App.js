import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification';
import Section from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  handleTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handlePositiveFeedbackPersentage = () => {
    const { good } = this.state;
    const total = this.handleTotal();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.handleTotal();
    const positiveFeedbackPersentage = this.handlePositiveFeedbackPersentage();

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              onTotal={total}
              onPositivePercentage={positiveFeedbackPersentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
