import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// custom hooks

import { useFetchQuestion } from '../hooks/FetchQuestions'

const Questions = ({onChecked}) => {
    const[checked,setChecked] = useState(undefined)
    const[{
        isLoading,
        apiData,
        serverError,
      }, setGetData] =useFetchQuestion()

    const  questions  = useSelector(state => state.questions.queue[state.questions.trace])

  useEffect(() =>{
    console.log(questions)
  })

    function onSelect(i){
        onChecked(i)
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
            <div className='check'></div>
        </li>
        ))
        }
      </ul>
    </div>
  )
}

export default Questions
