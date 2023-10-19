import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Controls from '../Controls/Controls';
import CloseIcon from '@material-ui/icons/Close';


    const useStyles = makeStyles(theme => ({
        dialogWrapper: {
            padding: theme.spacing(2),
            position: 'absolute',
            top: theme.spacing(5)
        },
        dialogTitle: {
            paddingRight: '0px'
        }
    }))

    

export default function PopupMarkStudent(props) {

    const { title, children, openPopupMarkStudent, setOpenPopupMarkStudent } = props;
    const classes = useStyles();

    return(
        <Dialog 
        open={openPopupMarkStudent}
        maxWidth="sm" 
        classes={{ paper: classes.dialogWrapper }}
        >
            <DialogTitle className={classes.dialogTitle} >
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                       { title }
                    </Typography>
                    <Controls.ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopupMarkStudent(false)}}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                { children }
            </DialogContent>
        </Dialog>
    );
}
