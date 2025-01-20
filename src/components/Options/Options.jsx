import React from 'react'
import s from './Options .module.css'
const Options = ({updateFeedback, totalFeedback, handleReset}) => {
  return (
      <ul className={s.listOptions}>
          <li key={crypto.randomUUID()} className={s.itemOption}><button onClick={() => updateFeedback('good')} className={s.btnOption}>Good</button></li>
          <li key={crypto.randomUUID()} className={s.itemOption}><button onClick={() => updateFeedback('neutral')} className={s.btnOption}>Neutral</button></li>
          <li key={crypto.randomUUID()} className={s.itemOption}><button onClick={() => updateFeedback('bad')} className={s.btnOption}>Bad</button></li>
          {(totalFeedback>=1)&&(<li key={crypto.randomUUID()} className={s.itemOption}><button onClick={handleReset} className={s.btnOption}>Reset</button></li>)}
    </ul>
  )
}

export default Options