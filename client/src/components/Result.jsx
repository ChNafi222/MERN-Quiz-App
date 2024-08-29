import React, { useEffect } from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { resetAllAction } from '../hooks/FetchQuestions';
import { resetResultAction } from '../redux/result_reducer';
import { useDispatch, useSelector } from 'react-redux'

import { attempts_Number, earnPoints_Number, flag_Result } from '../helper/helper';
const Result = () => {

  const { questions:{queue, answers}, result:{result,userId} } = useSelector(state => state );
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(flag)
  })

  const totalpoints = queue.length*10;

  const attempts = attempts_Number(result) 

  const earnPoints = earnPoints_Number(result,answers, 10)
  const flag = flag_Result(totalpoints,earnPoints)

  

  function onRestart(){
    console.log("restart")
      dispatch(resetAllAction())
      dispatch(resetResultAction())
  }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <div className='result flex-center'>
            <div className='flex'>
              <span>Username</span>
              <span className='bold'>Daily Tuition</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalpoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Quiz Result </span>
                <span style={{color : `${flag ? '#2aff95' :'#ff2a66' }`}}className='bold'>{flag ? 'Passed' : 'Failed'}</span>
            </div>
        </div>
        <div className="start">
           <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
        <div className="container">
           <ResultTable />
        </div>
    </div>
  )
}

export default Result
