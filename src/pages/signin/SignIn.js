import { useEffect, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ExtendedLogo from "../../components/logo/ExtendedLogo";import { useNavigate } from "react-router-dom";
;

const SignIn = () => {

    const navigate = useNavigate();
    const onSignupClick = useCallback(() => {
        navigate("/user-information");
      }, [navigate]);

      useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
          "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                const targetElement = entry.target;
                targetElement.classList.add("animate");
                observer.unobserve(targetElement);
              }
            }
          },
          {
            threshold: 0.15,
          }
        );
    
        for (let i = 0; i < scrollAnimElements.length; i++) {
          observer.observe(scrollAnimElements[i]);
        }
    
        return () => {
          for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.unobserve(scrollAnimElements[i]);
          }
        };
      }, []);
      
  
  return (
    <div className="w-[1530px] bg-aliceblue overflow-hidden flex flex-col items-start justify-start pt-[34px] pb-[95px] pr-[68px] pl-12 box-border tracking-[normal] mq750:pl-6 mq750:pr-[34px] mq750:box-border">
      <ExtendedLogo />
      <section className="self-stretch flex flex-row items-start justify-center max-w-full text-center text-xl text-steelblue font-poppins">
        <div className="w-[536px] flex flex-col items-start justify-start gap-[37px] max-w-full mq675:gap-[37px]">
          <b
            className="self-stretch relative leading-[32px] capitalize [&.animate]:animate-[1s_ease_2s_1_normal_forwards_slide-in-top] opacity-[0] mq450:text-base mq450:leading-[26px]"
            data-animate-on-scroll
          >
            Continue your journey with nexus
          </b>
          <form
            className="m-0 self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-center justify-start p-[38px] box-border gap-[30px] [&.animate]:animate-[1s_ease_2s_1_normal_forwards_fade-in] opacity-[0] max-w-full mq450:pt-[25px] mq450:pb-[25px] mq450:box-border mq675:gap-[30px]"
            data-animate-on-scroll
          >
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[18px]">
              <b className="self-stretch relative text-xl tracking-[0.1px] leading-[32px] font-poppins text-darkblue-100 text-center mq450:text-base mq450:leading-[26px]">
                Sign In
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                <div className="relative text-mid tracking-[0.2px] leading-[24px] font-semibold font-poppins text-text-color text-left">{`Email `}</div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "5px",
                    },
                  }}
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
                sx={{
                  "& fieldset": { borderColor: "#e0e0e0" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "5px",
                  },
                }}
              />
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full">
                <div className="flex-1 relative text-[11px] tracking-[0.18px] leading-[25.42px] font-light font-poppins text-black text-left inline-block max-w-full">
                  Forgot password?
                </div>
              </div>
              <Button
                className="self-stretch h-[51px] hover:bg-darkblue-400 hover:cursor-pointer active:bg-darkblue-300 active:cursor-pointer mq450:pl-5 mq450:pr-5 mq450:box-border"
                disableElevation={true}
                variant="contained"
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
            className="self-stretch relative text-mid tracking-[0.18px] leading-[25.42px] [&.animate]:animate-[1s_ease_2s_1_normal_forwards_slide-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <span className="font-medium">{`Don’t have an account? `}</span>
            <b className="hover:cursor-pointer hover:[text-decoration:underline]" onClick={onSignupClick}>Sign Up</b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
