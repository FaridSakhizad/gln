import './App.css';

import Img from './assets/img-alpha-0.jpg';

function App() {
  return (
    <div>
      <img
        src={Img}
        width={'100%'}
        height={'auto'}
        alt="Galanna Cleaning. Clean Spaces. Better Lives"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
      }}
      />
    </div>
  )
}

export default App
