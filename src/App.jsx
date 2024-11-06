// //Pass color prop as value
// import './App.css';
// import Icons from './components/Icons';

// function App() {
//   return (
//     <div>
//       <Icons arrowColor="red" bluetoothColor="blue" size={40} />
      
//     </div>
//   );
// }

// export default App;


import './App.css';
import Icons from './components/Icons';

function App() {
  return (
    <div>
      <Icons colors={['red', 'blue']} size={['25', '30', '35', '100']} />
    </div>
  );
}

export default App;
