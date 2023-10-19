import styled from "styled-components";
import clsx from "clsx";
import { QuestionBoardProps } from "./QuestionBoard.types";
import { styles } from "./QuestionBoard.css";

const QuestionBoard = (props: QuestionBoardProps) => {
  const { className } = props;

  return (
    <div className={clsx('comp-question-board', className)}>
      <h2>Across</h2>
      <p>1. A Dog's form of communication.</p>
      <br />
      <h2>Down</h2>
    </div>
  )
}

export default styled(QuestionBoard)(styles);
