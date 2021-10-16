// arr1 = [-3,5];
// arr2 = [-3,5];
function same(cell1, cell2) {
    if (JSON.stringify(cell1) == JSON.stringify(cell2)) return true;
    else return false;
  }

// function seed() {return [...arguments]};

// const printCell = (cell, state) => {
//     // for (let i = 0; i < state.length; i++) {
//     //     let innerCell = state[i].length;
//     //     for (let j = 0; j < innerCell.length; j++) {
//     //         // const stateICells = innerCell[j];
//     //         console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
//     //     }
        
//     // }
//     for (let i = 0, len = cell.length; i < len; i++) {
//         if (cell[i][0] === state[0] && cell[i][1] === state[1]) {
//           return '\u25A3';
//         }
//       }
//       return '\u25A2';
    
  
// //   if (cell.every(elem => state.includes(elem))){
// //     console.log("if \u25A3'")
// //   } else {
// //     console.log("else \u25A2")
// //   }
// };

function contains(cell) {
  console.log(cell)
  return cell.some((c) => same(c, cell));

}