// //Unique Color Props for Each Icon

// import { AArrowDown, BluetoothConnected } from 'lucide-react';
// import PropTypes from 'prop-types';
// import React from 'react';

// const Icons = ({ arrowColor = 'black', bluetoothColor = 'black', size = 24 }) => {
//   return (
//     <div>
//       <AArrowDown color={arrowColor} size={size} />
//       <BluetoothConnected color={bluetoothColor} size={size} />
//     </div>
//   );
// };

// Icons.propTypes = {
//   arrowColor: PropTypes.string,
//   bluetoothColor: PropTypes.string,
//   size: PropTypes.number,
// };

// export default Icons;


//Passing Colors as an Array
import { AArrowDown, BluetoothConnected } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';

const Icons = ({ colors = ['black', 'black'], size = ['25' , '30', '35', '100'] }) => {
  return (
    <div>
      <AArrowDown color={colors[0]} size={size[0]} />
      <BluetoothConnected color={colors[1]} size={size[3]} />
    </div>
  );
};

Icons.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.number,
};

export default Icons;

