import clsx from "clsx";
import styled from "styled-components";

import { BoardProps } from "./Board.types";
import { styles } from "./Board.css";
import Grid from "../Grid/Grid";
import QuestionBoard from "../QuestionBoard";
import { puzzleTestData } from "../../lib/data/test-data-puzzle";

const Board = (props: BoardProps) => {
  const { className } = props;

  return (
    <div className={clsx('comp-board', className)}>
      <QuestionBoard />
      <Grid data={puzzleTestData} />
    </div>
  );
}

export default styled(Board)(styles);