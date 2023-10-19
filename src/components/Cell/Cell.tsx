import styled from 'styled-components';
import clsx from 'clsx';
import { CellProps } from './Cell.types';
import { styles } from './Cell.css';

const Cell = (props: CellProps) => {
  const { className, value = '' } = props;

  return (
    <div className={clsx('comp-cell', className)}>
      <p className="cell--sub">1</p>
      {value}
    </div>
  )
}

export default styled(Cell)(styles);
