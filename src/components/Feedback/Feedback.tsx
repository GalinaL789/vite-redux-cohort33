import React from "react";
import { mdiReload, mdiThumbDown, mdiThumbUp } from "@mdi/js"
import Icon from "@mdi/react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { feedbackSliceActions, feedbackSliceSelectors } from "store/redux/feedback/feedbackSlice"
import { FeedbackWrapper } from "./styles";

function Feedback() {

  const dispatch=useAppDispatch()
  const like=useAppSelector(feedbackSliceSelectors.like)
  const dislike=useAppSelector(feedbackSliceSelectors.dislike)
  const addLike=()=>{
    dispatch(feedbackSliceActions.addLike())
  }
  const addDisLike=()=>{
    dispatch(feedbackSliceActions.addDislike())
  }

  const reload=()=>{
    dispatch(feedbackSliceActions.reload())
  }
  return (
    <FeedbackWrapper>
      <div>
        <button onClick={addLike}>  
        <Icon path={mdiThumbUp} size={2} />
        </button>
        <div>{like}</div>
      </div>
      <div>
      <button onClick={addDisLike}> 
        <Icon path={mdiThumbDown} size={2} />
        </button>
        <div>{dislike}</div>
      </div>
      <div>
        <button onClick={reload}>
        <Icon path={mdiReload} size={2} />
        </button>
      </div>
    </FeedbackWrapper>
  )
}
export default Feedback
