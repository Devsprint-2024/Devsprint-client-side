import { useEffect, useCallback, useState } from "react";
import * as React from 'react';
import { TextField, Button } from "@mui/material";
import ExtendedLogo from "../../components/logo/ExtendedLogo";
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SignIn = () => {
  const navigate = useNavigate();

  const onSignupClick = useCallback(() => {
    navigate("/user-information");
  }, [navigate]);

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openSnackbar2, setOpenSnackbar2] = React.useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
    console.log("signed in");
    setTimeout(() => {
      setOpenSnackbar(false);
    }, 2000);
  };

  const handleClick2 = () => {
    setOpenSnackbar2(true);
    setTimeout(() => {
      setOpenSnackbar2(false);
    }, 2000);
  };
  

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleCloseSnackbar2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar2(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const goToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
   // console.log("info: ", email, password);
   const signin = {
    email: email,
    password: password
  };
  
  fetch("https://devsprint-server.onrender.com/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signin),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } 
      else if(response.status === 500) {
        throw new Error("Sign in failed");
      }
    })
    .catch((error) => {
      console.log("Error occurred:", error);
    
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <> 
    <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={handleCloseSnackbar}>
      <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
        Sign-in successful!
      </Alert>
    </Snackbar>

    <Snackbar open={openSnackbar2} autoHideDuration={1200} onClose={handleCloseSnackbar2}>
      <Alert onClose={handleCloseSnackbar2} severity="error" sx={{ width: '100%' }}>
        Invalid sign-in attempt! Please try again.
      </Alert>
    </Snackbar>

    <div className="w-[1530px] bg-aliceblue overflow-hidden flex flex-col items-start justify-start pt-[34px] pb-[95px] pr-[68px] pl-12 box-border tracking-[normal] mq750:pl-6 mq750:pr-[34px] mq750:box-border">
    

      <ExtendedLogo />
      <section className="self-stretch flex flex-row items-start justify-center max-w-full text-center text-xl text-steelblue font-poppins">
        <div className="w-[536px] flex flex-col items-start justify-start gap-[37px] max-w-full mq675:gap-[37px]">
          <b
            className="self-stretch relative leading-[32px] capitalize mq450:text-base mq450:leading-[26px]"
            data-animate-on-scroll
          >
            Continue your journey with nexus
          </b>
          <form
            className="m-0 self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-center justify-start p-[38px] box-border gap-[30px] max-w-full mq450:pt-[25px] mq450:pb-[25px] mq450:box-border mq675:gap-[30px]"
            data-animate-on-scroll
            onSubmit={handleSubmit}
          >
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[18px]">
              <b className="self-stretch relative text-xl tracking-[0.1px] leading-[32px] font-poppins text-darkblue-100 text-center mq450:text-base mq450:leading-[26px]">
                Sign In
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                <div className="relative text-mid tracking-[0.2px] leading-[24px] font-semibold font-poppins text-text-color text-left">
                  Email
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 box-border gap-[9px] max-w-full">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-3">
                <div className="relative text-mid tracking-[0.2px] leading-[24px] font-semibold font-poppins text-text-color text-left">
                  Password
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full">
                <div className="flex-1 relative text-[11px] tracking-[0.18px] leading-[25.42px] font-light font-poppins text-black text-left inline-block max-w-full">
                  Forgot password?
                </div>
              </div>
              <Button
                className="self-stretch h-[51px] hover:bg-darkblue-400 hover:cursor-pointer active:bg-darkblue-300 active:cursor-pointer mq450:pl-5 mq450:pr-5 mq450:box-border"
                variant="contained"
                type="submit" 
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "15",
                  background: "#371dae",
                  borderRadius: "9.079646110534668px",
                  "&:hover": { background: "#371dae" },
                  height: 51,
                }}
              >
                Enter
              </Button>
            </div>
          </form>
          <div
            className="self-stretch relative text-mid tracking-[0.18px] leading-[25.42px]"
            data-animate-on-scroll
          >
            <span className="font-medium">{`Don’t have an account? `}</span>
            <b
              className="hover:cursor-pointer hover:[text-decoration:underline]"
              onClick={onSignupClick}
            >
              Sign Up
            </b>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SignIn;
