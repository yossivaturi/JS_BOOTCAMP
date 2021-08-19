
//XP4
function Alert(props) {
  const colorClasses = {
    red: 'danger',
    orange: 'warning',
    blue: 'primary',
    lightblue: 'info',
    green: 'success',
    gray: 'secondary'
}
const colorClass = colorClasses[props.color]
  
if (!colorClass) {
  alert(`The color ${props.color} is not in the list.`)
  return <></>
}

return (
  <div className={`alert alert-${colorClass}`} role='alert'>
      {props.text}
  </div>
)
}


// XP3
// function Alert(props) {
//     let colorClass = "";
//     switch (props.color) {
//         case 'red':
//             colorClass= "alert-danger";
//           break;
//         case 'orange':
//             colorClass= "alert-warning"
//           break;
//         default:
//             colorClass= "";
//       }
    
//     return (
//         <>
//         <div class={`alert ${colorClass}`} role="alert">
//         This is a primary alert—check it out!
//         </div>      
//         </>

//     );
// }






//XP2
// function Alert(props) {
//     return (
//         <div
//         style={{ display: props.show ? 'block' : 'none' }}
//         className='alert alert-danger'
//         role='alert'
//         >
//             {props.text}
//         </div>

//     );
// }

export default Alert;