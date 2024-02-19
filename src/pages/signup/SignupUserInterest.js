import { useCallback, useEffect, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  Autocomplete,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExtendedLogo from "../../components/logo/ExtendedLogo";
import disciplinesData from "../data/disciplinesData";
import { updateData, getData, saveData } from "../../utils/LocalStorageUtils"; 

const SignupUserInterest = () => {
  const navigate = useNavigate();

  const [selectedDisciplines, setSelectedDisciplines] = useState(null);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const handleChange = (event, newValue) => {
    setSelectedDisciplines(newValue);
    setSelectedDesignation(null);
  };

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

  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const userData = getData('user');
      const updatedUserData = {
        ...userData,
        discipline: selectedDisciplines?.discipline,
        designation: selectedDesignation,
      };
      //send updated data to backend
     
     fetch("http://localhost:5000/signup", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(updatedUserData),
     })
       .then((response) => {
         if (response.status === 200) {
           window.alert("signup successful!");
           navigate("/signin");
         } 
       })
       .catch((error) => {
         console.log("Error occurred:", error);
       
       });
  };

  
  return (
    <footer className="w-full bg-aliceblue overflow-hidden flex flex-col items-start justify-start pt-[34px] px-[37px] pb-[167px] box-border gap-[188px] tracking-[normal] text-left text-xl font-lalezar mq450:gap-[188px] mq1025:gap-[188px]">
      <div
        className="flex flex-row items-start justify-start cursor-pointer"
        onClick={onSignUpContainerClick}
      >
       <ExtendedLogo />
      </div>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[31px] box-border max-w-full text-center text-xl text-darkslateblue font-inter">
        <div className="w-[1133px] flex flex-col items-center justify-start gap-[149px] max-w-full mq450:gap-[149px] mq750:gap-[149px] mq1125:gap-[149px]">
          <form
            className="m-0 self-stretch rounded-[10px] bg-white shadow-[0px_4px_63px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-center justify-start pt-[150px] px-[54px] pb-[165px] gap-[63px_10px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0] mq750:gap-[63px_10px] mq750:pt-[97px] mq750:pb-[107px] mq750:box-border mq1125:gap-[63px_10px] mq1125:pl-[27px] mq1125:pr-[27px] mq1125:box-border"
            data-animate-on-scroll
            onSubmit={handleSubmit}
          >
            <b className="relative text-[25px] tracking-[0.1px] leading-[32px] font-poppins text-darkblue text-center mq450:text-xl mq450:leading-[26px]">
              Areas of Interest
            </b>
             <Autocomplete
              id="country-select-demo"
              className="self-stretch h-12 relative"
              sx={{ width: 1030 }}
              fullwidth={true}
              options={disciplinesData}
              value={disciplinesData.discipline}
             // onChange={(e) => setselectedDisclipline(e.target.value)}
              onChange={handleChange}
              autoHighlight
              getOptionLabel={(option) => option.discipline}
             
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Your Discipline"
                
                />
              )}
            />

            <Autocomplete
            className="self-stretch h-12"
            sx={{ width: "100%" }}
            disablePortal
            options={selectedDisciplines?.designations || []}
            getOptionLabel={(option) => option}
            value={selectedDesignation} 
            onChange={(_, newValue) => setSelectedDesignation(newValue)}
            renderInput={(params) => (
                <TextField
                {...params}
                placeholder="Select your designation"
                variant="outlined"
                />
            )}
            />

            <button className="cursor-pointer [border:none] p-[21px] bg-darkblue-100 self-stretch rounded-[9.08px] flex flex-row flex-wrap items-center justify-center hover:bg-mediumslateblue hover:cursor-pointer active:bg-midnightblue">
              <div className="relative text-[21.8px] tracking-[0.18px] leading-[25.42px] font-medium font-inter text-white text-left whitespace-nowrap mq450:text-[17px] mq450:leading-[20px]"
              >
                Sign Up
              </div>
            </button>
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