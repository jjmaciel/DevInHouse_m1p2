import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    link: {
      color: '#000000',
    },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    zap: {
        marginRight: 20,
        fontSize: 20,
        color: "#ffffff",
    }
  }));

  export default useStyles;