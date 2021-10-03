import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"

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

function PersonDetail({ children, item }) {
    const classes = useStyles()
    const [ open, setOpen ] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }


    return(
        <div>
           <div>
            <button 
                type="button" 
                onClick={handleOpen} 
                style={{margin:"0" , padding:"0", backgroundColor:"transparent", border:"none", cursor:"pointer"}}
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
                        <img 
                            src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} 
                            alt={item.title} 
                            onError={(e) => {e.target.onerror = null
                                e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                            }
                        />
                        <p>{item.name}</p>
                        {/* <p>{item.id}</p> */}
                        <div className="movies">
                            {(item.known_for).length > 0 && (item.known_for).map((movie) => (
                                <div key={movie.id}>
                                    <p>{movie.title} {movie.name}</p>
                                    <p>{movie.release_date}</p>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                        alt={item.title} 
                                        onError={(e) => {e.target.onerror = null
                                            e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </Modal>
            </div>
        </div>
    )
}

export default PersonDetail