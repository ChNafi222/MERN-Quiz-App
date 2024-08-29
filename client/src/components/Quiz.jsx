import React, { useEffect, useState } from 'react'
import Questions from './Questions';

import {useDispatch, useSelector} from 'react-redux'

import { moveNextAction, movePrevAction } from '../hooks/FetchQuestions';

import { Navigate } from 'react-router-dom';

import { PushAnswer } from '../hooks/setResult';

// import '../styles/'

const Quiz = () => {

  const {queue, trace} = useSelector(state => state.questions)
  const result = useSelector(state =>state.result.result)
  const[check,setChecked] = useState(undefined)
  const dispatch = useDispatch()

  useEffect(() =>{
    console.log(result)
  })

  function onNext(){
    if(trace <queue.length)
    {
      dispatch(moveNextAction())

      if(result.length <= trace){
      dispatch(PushAnswer(check))
      }
    }

    setChecked(undefined)
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
  if(result.length && result.length >= queue.length){
     return <Navigate to={'/result'} replace="true"></Navigate>
  }
  return (
    <div className='container'>
       <h1 className='title text-light'>Quiz Application</h1>
       <Questions onChecked={onChecked}/>
       <div className="grid">
         {  trace > 0 ?
          <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>

  }
          <button className='btn next' onClick={onNext}>
            Next
      </button>
       </div>
    </div>
  )
}

export default Quiz
