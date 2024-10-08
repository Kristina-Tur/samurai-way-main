import React, {FormEvent} from "react"
import Grid from "@mui/material/Grid"
import Checkbox from "@mui/material/Checkbox"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import FormLabel from "@mui/material/FormLabel"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useFormik } from "formik"
import { Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../../../app/store-redux"
import { loginTC } from "../model/auth-reducer"
import styled from "styled-components";

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const Login = () => {
  const dispatch = useDispatch()
  const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email.trim()) {
        errors.email = "Required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
      }
      if (!values.password.trim()) {
        errors.password = "Required"
      } else if (values.password.length < 4) {
        errors.password = "Must be more 4 symbols"
      }
      return errors
    },
    onSubmit: (values, formikHelpers) => {
      console.log(1)
       //dispatch(loginTC(values))
    },
  })
  const onSubmitHandler = (e: FormEvent ) =>{
    e.preventDefault()
    dispatch(loginTC(formik.values))
  }

  if (isLoginIn) {
    return <Redirect to={"/profile"} />
  }

  return (
      <Grid container justifyContent={"center"}>
        <Grid item justifyContent={"center"}>
          {/*<form onSubmit={formik.handleSubmit}>*/}
          <form onSubmit={onSubmitHandler}>
            <FormControl>
              <FormLabel>
                <p>Use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
              </FormLabel>
              <FormGroup>
                <TextField label="Email" margin="normal" {...formik.getFieldProps("email")} />
                {formik.touched && formik.errors.email && <TitleError>{formik.errors.email}</TitleError>}
                <TextField type="password" label="Password" margin="normal" {...formik.getFieldProps("password")} />
                {formik.touched && formik.errors.password && <TitleError>{formik.errors.password}</TitleError>}
                <FormControlLabel
                    label={"Remember me"}
                    control={<Checkbox checked={formik.values.rememberMe} {...formik.getFieldProps("rememberMe")} />}
                />
                <Button type={"submit"} variant={"contained"} color={"primary"}>
                  Login
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </Grid>
      </Grid>
  )
}
const TitleError = styled.div`
  color: red;
  font-size: 14px;
`