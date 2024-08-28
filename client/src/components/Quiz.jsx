import React, { useEffect, useState } from 'react'
import Questions from './Questions';

import {useDispatch, useSelector} from 'react-redux'

import { moveNextAction, movePrevAction } from '../hooks/FetchQuestions';

import { PushAnswer } from '../hooks/setResult';

// import '../styles/'

const Quiz = () => {

  const {queue, trace} = useSelector(state => state.questions)
  const state = useSelector(state =>state)
  const[check,setChecked] = useState(undefined)
  const dispatch = useDispatch()

  useEffect(() =>{
    console.log(state)
  })

  function onNext(){
    if(trace <queue.length)
    {
      dispatch(moveNextAction())

      dispatch(PushAnswer(check))
    }
  }
  function onPrev(){
    if(trace >0 ){
    dispatch(movePrevAction())
    }
  }

  function onChecked(check){
    console.log(check)
    setChecked(check)
  }

  // 
  return (
    <div className='container'>
       <h1 className='title text-light'>Quiz Application</h1>
       <Questions onChecked={onChecked}/>
       <div className="grid">
          <button className='btn prev' onClick={onPrev}>Prev</button>
          <button className='btn next' onClick={onNext}>
            Next
      </button>
       </div>
    </div>
  )
}

export default Quiz
