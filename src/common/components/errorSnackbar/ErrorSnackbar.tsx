import * as React from "react"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../../app/store-redux";
import {setAppErrorAC} from "../../../app/app-reducer";

export const ErrorSnackbar = () => {
  const error = useSelector<AppRootStateType, string | null>(state => state.app.error)
  const dispatch = useDispatch()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return
      }
    dispatch(setAppErrorAC(null))
  }

  const isOpen = error !== null

  return (
    <div>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  )
}
