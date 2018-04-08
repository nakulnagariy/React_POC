const { render } = ReactDOM;

render(
  <h1 id = 'title'
    className = 'header'
    style = { {backgroundColor: '#ddd', color: '#000',fontFamily: 'verdana', padding: '10px'} }>
    Hello World
  </h1>,
  document.getElementById('react-container')
)