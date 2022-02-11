import {useState} from 'react';
import FeedbackOptions from './components/feedbackOptions/feedbackOptions';
import Statistics from './components/statistics/Statistics';
import Notification from './components/notification/Notification';
import Section from './components/section/Section';

export const App = () => {
    
  const [good, setGood]= useState(0)
  const [neutral, setNeutral]= useState(0)
  const [bad, setBad]= useState(0)

  const hendlerChange = option => {
    switch (option) {
      case "good":
        return setGood((prevGood) => prevGood + 1);
      case "neutral":
        return setNeutral((neutral) => neutral + 1);
      case "bad":
        return setBad((bad) => bad + 1);
      default:
        throw new Error();
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
    };

  const countPositivePercentage = () => {
    return countTotalFeedback() ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  const totalState = () => ["good", "neutral", "bad"]

    
    return (
<>
    <Section title="Please leave feedback">
      <FeedbackOptions   
       options={totalState()}
       onLeaveFeedback={hendlerChange}
       />
       </Section> 
            
       <Section
         title="Statistics">
         {countTotalFeedback > 0 ? (
         <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()}
            />
            ) : (
        <Notification message="There is no feedback"
            />)}
   
</Section> 
</>
    )
}
export default App;

