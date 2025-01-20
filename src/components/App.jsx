import { useState } from 'react'
import './App.css'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback '
import Description from './Description/Description'
import Notification from './Notification/Notification'

function App() {
  const [options, setOptions] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  })
  
  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setOptions({ ...options, good: options.good +=1});
        break;
      case 'neutral':
        setOptions({ ...options, neutral: options.neutral +=1 });
        break;
      case 'bad':
        setOptions({ ...options, bad: options.bad +=1});
        break;
      default:
        return;
  }
  }
  function handleReset(){
    return setOptions({
      ...options, good: 0,
      neutral: 0,
      bad: 0
    });
  }
  const totalFeedback = +options.good + +options.neutral + +options.bad;
  
  return (
    <>
      <Description/>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} handleReset={handleReset}/>
      { (totalFeedback>=1)&&(<Feedback
        clickGood={+options.good} clickNeutral={+options.neutral} clickBad={+options.bad} total={totalFeedback} percent={Math.round((options.good / totalFeedback) * 100)}/>)}
      {(totalFeedback<1)&&(<Notification/>)}
    </>
  )
}

export default App
