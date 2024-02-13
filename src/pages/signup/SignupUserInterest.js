import { useCallback, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExtendedLogo from "../../components/logo/ExtendedLogo";

const SignupUserInterest = () => {
  const navigate = useNavigate();

  const onSignUpContainerClick = useCallback(() => {
    navigate("/");
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
    <footer className="w-[1530px] bg-aliceblue overflow-hidden flex flex-col items-start justify-start pt-[34px] px-[37px] pb-[167px] box-border gap-[188px] tracking-[normal] text-left text-xl font-lalezar mq450:gap-[188px] mq1025:gap-[188px]">
      <div
        className="flex flex-row items-start justify-start cursor-pointer"
        onClick={onSignUpContainerClick}
      >
        <ExtendedLogo />
       
      </div>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[31px] box-border max-w-full text-center text-xl text-darkslateblue font-inter">
        <div className="w-[1133px] flex flex-col items-center justify-start gap-[149px] max-w-full mq450:gap-[149px] mq750:gap-[149px] mq1125:gap-[149px]">
          <form
            className="m-0 self-stretch h-[700px] rounded-3xs bg-white shadow-[0px_4px_63px_rgba(0,_0,_0,_0.15)] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[150px] px-[54px] pb-[165px] box-border gap-[63px_10px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0] mq750:gap-[63px_10px] mq750:pt-[97px] mq750:pb-[107px] mq750:box-border mq1125:gap-[63px_10px] mq1125:pl-[27px] mq1125:pr-[27px] mq1125:box-border"
            data-animate-on-scroll
          >
            <b className="relative text-6xl tracking-[0.1px] leading-[32px] font-poppins text-darkblue-100 text-center mq450:text-xl mq450:leading-[26px]">
              Areas of Interest
            </b>
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-12 relative"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#000" },
                "& .MuiInputBase-root": {
                  height: "48px",
                  borderRadius: "0px 0px 0px 0px",
                },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-12 relative"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#000" },
                "& .MuiInputBase-root": {
                  height: "48px",
                  borderRadius: "0px 0px 0px 0px",
                },
              }}
            />
            <Button
              className="self-stretch flex-1 cursor-pointer hover:bg-darkblue-200 hover:cursor-pointer active:bg-midnightblue"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "21.8",
                background: "#371dae",
                borderRadius: "9.079646110534668px",
                "&:hover": { background: "#371dae" },
              }}
            >
              Sign Up
            </Button>
          </form>
          <div
            className="self-stretch relative leading-[32px] capitalize font-medium [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] mq450:text-base mq450:leading-[26px]"
            data-animate-on-scroll
          >
            Step 2 of 2
          </div>
        </div>
      </section>
      <div className="w-[1133px] hidden max-w-full" />
    </footer>
  );
};

export default SignupUserInterest;