'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: { backgroundColor: '#ddd', color: '#000', fontFamily: 'verdana', padding: '10px' } },
  'Hello World'
), document.getElementById('react-container'));
