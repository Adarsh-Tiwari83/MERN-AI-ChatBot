import { TextField } from '@mui/material';


type Props={
    name:string;
    label:string;
    type:string;
};

const CustomizedInput = (props:Props) => {
  return (
    <TextField margin='normal' InputLabelProps={{style:{color:'white'}}} InputProps={{style:{width:'400px',borderRadius:10,fontSize:20,color:'white'}}} name={props.name} label={props.label} type={props.type}/>
  )
}

export default CustomizedInput
