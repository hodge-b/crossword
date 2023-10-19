export const styles = () => {
  return {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1.5rem',
    height: '1.5rem',
    padding: '.5rem',
    backgroundColor: 'white',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.5rem',

    '& .cell--sub': {
      position: 'absolute',
      display: 'inline',
      top: '0',
      left: '0',
      width: 'max-content',
      height: 'auto',
      fontSize: '.5rem',
    },
  }
}
