import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import { getMovieDetail} from "../../API/getData"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    paper: {
        backgroundColor: theme.palette.background.paper,
        width: "450px",
        borderRadius: "12px",
        boxShadow: theme.shadows[5],
        overflow: "hidden",
    },
}))

function SimilarModal({ Similar, children }) {
    const classes = useStyles()
    const [ open, setOpen ] = useState(false)
    const [MovieDetail, setMovieDetail] = useState()

    const id = Similar.map((item) => item.id)
    // console.log(id)

    useEffect(() => {
        getMovieDetail(id, setMovieDetail)
    }, [id])

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <div>
                <button 
                    type="button" 
                    onClick={handleOpen} 
                >
                    {children}
                </button>

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
                            
                        </div>
                    </Fade>
                </Modal> 
            </div>
        </>
    )       
}

export default SimilarModal