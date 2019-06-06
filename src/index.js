import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import NoteApp from './components/NoteApp'
// import CountApp from './components/CountApp'


// ReactDOM.render(<CountApp count={0} />, document.getElementById('root'))

ReactDOM.render(<NoteApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()