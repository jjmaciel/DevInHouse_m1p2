import { createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const headerTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  export default headerTheme;