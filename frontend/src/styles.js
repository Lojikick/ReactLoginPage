import { makeStyles } from '@material-ui/core/styles';
//import PhotoCamera from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.blue,
    padding: theme.spacing(8,0,6)
  },

  card: {
    height: '100%'
  },

  typo: {
    flexGrow:1,
    textAlign: "center"
  },
}));

export default useStyles;