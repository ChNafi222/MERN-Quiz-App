import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// custom hooks

import { useFetchQuestion } from '../hooks/FetchQuestions'

import { updateresultAction } from '../redux/result_reducer'
import { updateresult } from '../hooks/setResult'

const Questions = ({onChecked}) => {
    const[checked,setChecked] = useState(undefined)
    const[{
        isLoading,
        apiData,
        serverError,
      }, setGetData] =useFetchQuestion()

    const  questions  = useSelector(state => state.questions.queue[state.questions.trace])

    const { trace } = useSelector(state => state.questions)

    const  result = useSelector(state => state.result.result)

    useSelector(state => console.log(state))

    const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(updateresult({trace,checked}))
  },[checked])

    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateresult({trace,checked}))
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown error"}</h3>
    useEffect(()=>{

    })

  return (
    <div className='questions'>
      <h2 className='text-light'>{questions?.question}</h2>
      <ul key={questions?.id}>
        { questions?.options.map((q,i) => (
        <li key={i}>
            <input type="radio"
             value={false}
             name="options"
             id={`q${i}-option`}
             onChange={() => onSelect(i)}
            />
            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
            <div className={`check ${result[trace]==i ? 'checked' : ''}`}></div>
        </li>
        ))
        }
      </ul>
    </div>
  )
}

export default Questions
