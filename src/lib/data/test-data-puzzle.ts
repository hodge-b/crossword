export const puzzleTestData = {
  meta: {
    width: 4,
    height: 4,
  },
  puzzle: {
    across: {
      questions: [
        {
          id: 'across-01',
          clue: 'A Dog\'s form of communication.',
          solution: 'bark',
          position: {
            x: 0,
            y: 0,
          },
        },
        {
          id: 'across-02',
          clue: 'A spoken negative.',
          solution: 'no',
          position: {
            x: 0,
            y: 2,
          }
        },
      ],
    },
    down: {
      questions: [
        {
          id: 'down-01',
          clue: 'A place of many money transactions.',
          solution: 'bank',
          position: {
            x: 0,
            y: 0,
          }
        },
        {
          id: 'down-02',
          clue: 'lowest part of a watercraft.',
          solution: 'keel',
          position: {
            x: 3,
            y: 0,
          }
        },
      ],
    }
  }
}