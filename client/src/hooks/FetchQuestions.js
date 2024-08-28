import { useEffect, useState } from "react";
import data from "../database/data";
import { useDispatch } from "react-redux";

import * as Action from "../redux/question_reducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isloading: true }));
    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isloading: false }));
          setGetData((prev) => ({ ...prev, apiData: false }));

          dispatch(Action.startExamAction(question));
        } else {
          throw new Error("no question available");
        }
      } catch {
        setGetData((prev) => ({ ...prev, isloading: true }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

//
export const moveNextAction = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log("error");
  }
};

export const movePrevAction = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {
    console.log("error");
  }
};
