import * as Ation from "../redux/result_reducer";
export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Ation.pushResultAction(result));
  } catch (error) {
    console.log("error");
  }
};
