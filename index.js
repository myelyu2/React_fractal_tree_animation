import React from 'react'
import ReactDOM from 'react-dom'
import { FractalTree } from './FractalTree'

const timeStarted = Date.now()
let lastWholeSec = 0, fps = 0;

setInterval(() => {
  console.log('fps', fps);
  fps = 0;
}, 1000)

function FractalTreeFrame() {
  const time = Date.now() - timeStarted  
  fps += 1
  
  let lean = 0.1*Math.sin(time/2000)
  let sprout = 0.3 + 0.05*Math.sin(time/1300)
  return (
    <FractalTree
      lean={lean}
      size={100}
      sprout={sprout}
    />
  )
}


function renderFrame(props) {
  ReactDOM.render(
    <FractalTreeFrame />,
    document.getElementById('root')
  )
  
  setTimeout(renderFrame.bind(this), 0)
}

renderFrame()
