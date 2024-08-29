import * as Action from "../redux/result_reducer";
export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log("error");
  }
};

export const resetResultAction = (result) => async (dispatch) => {
  try {
    await dispatch(Action.resetResultAction(result));
  } catch (error) {
    console.log("error");
  }
};

export const updateresult = (index) => async (dispatch) => {
  try {
    await dispatch(Action.updateresultAction(index));
  } catch (error) {
    console.log("error");
  }
};
