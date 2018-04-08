const { createElement } = React;
const { render } = ReactDOM;

const style = {
  backgroundColor: '#ddd',
  color: '#000',
  fontFamily: 'verdana',
  padding: '10px'
}


const title = createElement (
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello World'
)

render(
  title,
  document.getElementById('react-container')
)