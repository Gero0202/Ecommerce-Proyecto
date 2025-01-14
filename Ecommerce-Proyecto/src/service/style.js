const styles = {
    container: {
      textAlign: 'center',
      marginTop: '10px',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    },
    button: {
      backgroundColor: '#28a745', 
      color: 'white',
      fontSize: '18px',
      border: 'none',
      padding: '8px 15px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      borderRadius: '5px',
      width: '35px',
      height: '35px',
    },
    buttonHover: {
      backgroundColor: '#218838', 
    },
    disabledButton: {
      backgroundColor: '#ddd', 
      cursor: 'not-allowed',
    },
    counterDisplay: {
      color: "black",
      fontSize: '22px',
      margin: '0 10px',
    },
    addButton: {
      marginTop: '15px',
      backgroundColor: '#28a745', 
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '18px',
      transition: 'background-color 0.3s ease',
    },
    addButtonHover: {
      backgroundColor: '#218838',
    },
    addButtonDisabled: {
      backgroundColor: '#6c757d', 
      cursor: 'not-allowed',
    },
  };
  
  export default styles;
  