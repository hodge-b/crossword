export interface PuzzleData {
  meta: {
    width: number,
    height: number,
  },
  puzzle: {
    across: {
      questions: Question[];
    },
    down: {
      questions: Question[];
    }
  }
}

interface Question {
  id: string;
  clue: string;
  solution: string;
  position: {
    x: number;
    y: number;
  }
}
