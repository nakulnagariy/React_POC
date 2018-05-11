import text from './titles.json'

export const hello = (
    <h1 
    id="hello" 
    className="header-hello" 
    style ="{{ backgroundColor: 'purple', color: ''yellow }}">
        {text.hello}
    </h1>
)

export const goodbye = (
    <h1
    id="godbye"
    className="header-goodbye"
    style ="{{ backgroundColor: 'purple', color: ''yellow }}">
        {text.goodbye}
    </h1>
)