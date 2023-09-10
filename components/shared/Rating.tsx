
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { getRatingColor } from '@/utils/helperFunctions';



export default function Rating(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex'}}>
      <CircularProgress  variant="determinate" {...props} color={getRatingColor(parseInt((props.value/10).toFixed(1)))} size={"3.2rem"} thickness={5.2}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color:'#ffffff'
        }}
      >
        
        <Typography
          variant="caption"
          component="div"
          color="white"
          sx={{
            fontSize:".8rem",
            backgroundColor:"transparent"
          }}
        >{`${(props.value/10).toFixed(1)}`}</Typography>

      </Box>
    </Box>
  );
}
