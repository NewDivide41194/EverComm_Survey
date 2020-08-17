import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:"100%"
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    paddingRight:"10px",
    width: "50%",
  },
}));

export default function ESTimeRange(props) {
  const classes = useStyles();
const {id,handleStartChange}=props
  return (
    <form className={classes.container} noValidate>
      <TextField
        id={id+"start"}
        label="Run Start"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleStartChange}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
        id={id+"end"}
        label="Run End"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}
// import React ,{useState}from 'react'
// import TimeRangeSlider from "react-time-range-slider";
// import * as Colors from '../config/Color.config'
// const ESTimeRange =(props)=>{
//   const {start,end}=props

//   const [value,setValue]=useState({start:start,end:end})
//   const changeStartHandler=(time)=> {
//     console.log("Start Handler Called", time);
//   }

//   const timeChangeHandler=(time)=> {
//    setValue(time)
//   }

//   const changeCompleteHandler=(time)=> {
//     console.log("Complete Handler Called", time);
//   }

//     const TimeRangePicker= <div style={{color:Colors.Gray}}>
//         <strong>From-</strong><span  className="pr-1">{value.start}</span>
//         <strong>To-</strong><span  className="pr-1">{value.end}</span>
//       <TimeRangeSlider
//         disabled={false}
//         format={24}
//         maxValue={"23:59"}
//         minValue={"00:00"}
//         name={"time_range"}
//         onChangeStart={changeStartHandler}
//         onChangeComplete={changeCompleteHandler}
//         onChange={timeChangeHandler}
//         step={15}
//         value={value}
//       />
//     </div>
//     return (
//       TimeRangePicker
//     );
  
// }

// export default ESTimeRange;