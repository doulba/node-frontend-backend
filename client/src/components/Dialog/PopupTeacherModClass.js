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

    

export default function PopupTeacherModClass(props) {

    const { title, children, openPopupTeacherModClass, setOpenPopupTeacherModClass } = props;
    const classes = useStyles();

    return(
        <Dialog 
        open={openPopupTeacherModClass}
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
                        onClick={()=>{setOpenPopupTeacherModClass(false)}}>
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
