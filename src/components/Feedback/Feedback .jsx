import React from 'react'
import s from './Feedback.module.css'

const Feedback  = ({clickGood, clickNeutral, clickBad, total, percent}) => {
  return (
      <>
          <ul className={s.listFeedback}>
              <li key={crypto.randomUUID()} className={s.itemFeedback}>Good: {clickGood}</li>
              <li key={crypto.randomUUID()} className={s.itemFeedback}>Neutral: {clickNeutral}</li>
              <li key={crypto.randomUUID()} className={s.itemFeedback}>Bad: {clickBad}</li>
              <li key={crypto.randomUUID()} className={s.itemFeedback}>Total: {total}</li>
              <li key={crypto.randomUUID()} className={s.itemFeedback}>Positive:{percent}</li>
      </ul>
      </>
  )
}

export default Feedback 