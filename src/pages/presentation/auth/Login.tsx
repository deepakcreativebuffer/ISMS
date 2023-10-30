import React, { FC, useState, startTransition } from "react";
import PageWrapper from "../../../layout/pageWrapper/PageWrapper";
import Page from "../../../layout/page/Page";
import Box from "../../../components/bootstrap/Box";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { FormGroup, FormControl, Input, InputLabel } from "@mui/material";
import Signup from "./Signup";
import logo from "../../../components/assets/10186541_goal_aim_achievement_target_business_icon 1.svg"
import Container from "../../../components/bootstrap/Container"

import { FormLabel } from '@mui/material';

interface ILoginHeaderProps {
  isNewUser?: boolean;
}
const LoginHeader: FC<ILoginHeaderProps> = ({ isNewUser }) => {
  if (isNewUser) {
    return (
      <>
        <div className="text-center h1 fw-bold mt-5">Create Account,</div>
        <div className="text-center h4 text-muted mb-5">
          Sign up to get started!
        </div>
      </>
    );
  }
  return (
    <>
      {/* <div className="text-center h1 fw-bold mt-5">Welcome,</div> */}
      {/* <div className="text-center h4 text-muted mb-5">Sign in to continue!</div> */}
      <div className="text-center h5 text-muted mb-5">Enter your Email & Password</div>
    </>
  );
};
LoginHeader.defaultProps = {
  isNewUser: false,
};

interface ILoginProps {
  isSignUp?: boolean;
}

const Login: FC<ILoginProps> = ({ isSignUp }) => {
  const [singUpStatus, setSingUpStatus] = useState<boolean>(!!isSignUp);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: { email?: string; password?: string } = {};

      if (!values.email) {
        errors.email = "Required";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
    validateOnChange: false,
    onSubmit: async (values) => {
      if (values.email) {
        // startTransition(() => {
        // 	LoginUserMutation(values)
        // 		.unwrap()
        // 		.then((data1: { access: string; refresh: string }) => {
        // 			localStorage.setItem('access_token', data1.access);
        // 			localStorage.setItem('refresh_token', data1.refresh);
        // 			navigate('/');
        // 		})
        // 		.catch((rejected) => {
        // 			toast(rejected.data?.detail);
        // 			formik.setFieldValue('email', '');
        // 			formik.setFieldValue('password', '');
        // 		});
        // });
      }
    },
  });

  return (
    // <PageWrapper title={singUpStatus ? "Sign Up" : "Login"}>
    //   <Page >
	<Container > 
        <Box>
			
          <div className="text-center my-2">
            <Link
              to="/"
              // className={classNames(
              // 	'text-decoration-none  fw-bold display-2',
              // 	{
              // 		'text-dark': !darkModeStatus,
              // 		'text-light': darkModeStatus,
              // 	},
              // )}
            >
              {/* <div className="text-center display-2 fw-bold mb-5 lh-1">
                ISMS
              </div> */}
			  <img src={logo} alt='logo' />
            </Link>
          </div>
          <div
          // className={classNames('rounded-3', {
          // 	'bg-l10-dark': !darkModeStatus,
          // 	'bg-dark': darkModeStatus,
          // })}
          >
            {/* <div className="row row-cols-2 g-3 pb-3 px-3 mt-0">
              <div className="col">
                <Button
                // color={darkModeStatus ? 'light' : 'dark'}
                // isLight={singUpStatus}
                // className='rounded-1 w-100'
                // size='lg'
                onClick={() => {
                	setSingUpStatus(false);
                	setSingUpStatus(!singUpStatus);
                }}
                >
                  Login
                </Button>
              </div>
              <div className="col">
                <Button
                // color={darkModeStatus ? 'light' : 'dark'}
                // isLight={!singUpStatus}
                // className='rounded-1 w-100'
                // size='lg'
                onClick={() => {
                	setSingUpStatus(!singUpStatus);
                }}
                >
                  Sign Up
                </Button>
              </div>
            </div> */}
          </div>

          <LoginHeader isNewUser={singUpStatus} />
          <form className="row g-3">
            {singUpStatus ? (
              <Signup />
            ) : (
              <>
                <div className="col-12 input_section">
                  <FormGroup>
				  <FormLabel>Email Address </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
						placeholder="Enter your email address"
                        aria-describedby="my-helper-text"
                        autoComplete="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => {
                          formik.setErrors({});
                        }}
                      />
                    </FormControl>
                  </FormGroup>
                </div>
                <div className="col-12 input_section">
                  <FormGroup>
				  <FormLabel>Password</FormLabel>
                    <FormControl>    
                      <Input
                        id="password"
						placeholder="Enter your Password"
                        aria-describedby="my-helper-text"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => {
                          formik.setErrors({});
                        }}
                      />
                    </FormControl>
                  </FormGroup>
                  <div>
<div className="d-flex align-items-start justify-content-start me-3 mt-2">
<FormGroup>
                    <FormControl>    

                      <Input
                        id="checkbox"
                        type="checkbox"
                        aria-describedby="my-helper-text"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => {
                          formik.setErrors({});
                        }}
                      />
                    </FormControl>
                  </FormGroup>
                  <div className="mx-1 pt-1 ">Remember me</div>
</div>
                  
                  <div 
                    className="cursor-pointer d-flex align-items-end justify-content-end me-3 mt-2 "
                    // onClick={() => setIsOpen(true)}
                    // onKeyDown={() => setIsOpen(true)}
                    aria-hidden="true"
                  >
                    Forget Password ?
                  </div>
                  </div>
                </div>
                <div className="col-12 btn">
                  <Button >
                    Login
                  </Button>
                </div>
              </>
            )}
          </form>
        </Box>
		</Container>
    //   </Page>
    // </PageWrapper>
  );
};

export default Login;
