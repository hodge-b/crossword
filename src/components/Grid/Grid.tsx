import { ReactNode, useEffect, useState } from 'react';
import clsx from "clsx";
import styled from "styled-components";

import { generatePuzzleGrid } from '../../lib/generatePuzzleGrid';
import { GridProps } from "./Grid.types";
import { styles } from './Grid.css';

const Grid = (props: GridProps) => {
  const { className, data } = props;

  const [grid, setGrid] = useState<ReactNode>();

  useEffect(() => {
    setGrid(generatePuzzleGrid(data));
  }, []);

  return (
    <div className={clsx('comp-grid', className)}>
      {grid}
    </div>
  )
}

export default styled(Grid)(styles);
