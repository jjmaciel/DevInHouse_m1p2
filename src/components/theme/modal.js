import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#f5b642',
      color: '#fff',
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  export default function TransitionsModal(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    
    const handleClose = () => {
      setOpen(false);
      setTimeout(function(){setOpen(true);}, 1000 )
    };
   

    return (
      <div>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">{props.textOn}</h2>
              <p id="transition-modal-description">{props.textTwo}</p>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }