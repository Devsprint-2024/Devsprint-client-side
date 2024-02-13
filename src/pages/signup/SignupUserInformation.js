import { useCallback, useEffect, useState, useRef } from "react";
import {
  TextField,
  Select,
  InputLabel,
  Button,
  MenuItem,
  FormHelperText,
  FormControl,
  Icon,
  InputAdornment,
  IconButton,
  Box,
  Typography,
  Snackbar,
  Autocomplete
} from "@mui/material";
import ExtendedLogo from "../../components/logo/ExtendedLogo";
import { useNavigate } from "react-router-dom";
import countryData from "../data/countryData";
import { saveData } from "../../utils/LocalStorageUtils";

const SignupUserInformation = () => {
  const navigate = useNavigate();
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

  const onBecomeMemberBtnClick = useCallback(() => {
    navigate("/user-interest");
  }, [navigate]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [profile_pic, setProfilePic] = useState("");
  const [
    birthdateInputDateTimePickerValue,
    setBirthdateInputDateTimePickerValue,
  ] = useState(null);

  const getPasswordHelperText = (password) => {
    if(password.length == 0) return '';
    else if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }

    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one capital letter';
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return 'Password must contain at least one special symbol';
    }

    return '';
}
const fileInputRef = useRef(null);

  const [str, setStr] = useState(" Supported: JPG, JPEG, PNG");
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

 

  const handleFileChange = (event) => {
    const selectedFiless = event.target.files;
    if (selectedFiless.length > 0) {
      setStr("Uploaded file: " + selectedFiless[0].name);
      setSelectedFiles([...selectedFiles, event.target.files[0]]);
    }
  };

  const handleUpload = async () => {
    const uploadPromises = selectedFiles.map(async (file) => {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
          params: {
            key: '08e06e8964e64a3f1d8bb8fb36fee354'
          },
        });

        return response.data.data.url;
      } catch (error) {
        console.error('Error uploading image:', error);
        return null;
      }
    });

    const uploadedImageUrls = await Promise.all(uploadPromises);
    setImageUrls([...imageUrls, ...uploadedImageUrls.filter((url) => url !== null)]);
  };


  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleShowPasswordClick1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPasswordClick2 = () => {
    setShowPassword2(!showPassword2);
  }
  const handleSubmit = () => {
    console.log("Hi here");
    const imageUrl = imageUrls.length > 0 ? imageUrls[0] : null;
    saveData('user', {
      firstname,
      lastname,
      email,
      password,
      phone,
      country,
      city,
      imageUrl 
    });
  };
  

  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-col items-start justify-start pt-[47px] px-[45px] pb-[118px] box-border gap-[40px] tracking-[normal] mq450:gap-[40px] mq1025:pl-[22px] mq1025:pr-[22px] mq1025:box-border">
      <ExtendedLogo />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[31px] box-border max-w-full">
        <section className="w-[1133px] flex flex-col items-start justify-start gap-[17px] max-w-full text-center text-xl text-darkslateblue font-inter">
          <div
            className="self-stretch relative leading-[32px] capitalize font-medium [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] mq450:text-base mq450:leading-[26px]"
            data-animate-on-scroll
          >
            Become a member of our community and enjoy the privileges from the
            comfort of your homes!
          </div>
          <div
            className="self-stretch rounded-3xs bg-white shadow-[0px_4px_63px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-center justify-start py-[73px] px-[54px] box-border gap-[63px_10px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0] max-w-full text-6xl text-darkblue-100 font-poppins mq750:gap-[63px_10px] mq750:pt-[31px] mq750:pb-[31px] mq750:box-border mq1025:pt-[47px] mq1025:pb-[47px] mq1025:box-border mq1125:gap-[63px_10px] mq1125:pl-[27px] mq1125:pr-[27px] mq1125:box-border"
            data-animate-on-scroll
          >
            <h3 className="m-0 relative text-inherit tracking-[0.1px] leading-[32px] font-bold font-inherit mq450:text-xl mq450:leading-[26px]">
              Basic Information
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full text-left text-mid text-text-color">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-2 pl-0 box-border gap-[7px_3px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[134px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`First Name `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                    variant="outlined"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    sx={{
                      "& fieldset": { borderColor: "#e6e6e6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "5px",
                      },
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[134px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`Last Name `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                    variant="outlined"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    sx={{
                      "& fieldset": { borderColor: "#e6e6e6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "5px",
                      },
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[134px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`Phone Number `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    sx={{
                      "& fieldset": { borderColor: "#e6e6e6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "5px",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[5px] pl-0 box-border gap-[35px_30px] max-w-full">
                <div className="w-[483px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`Country/Region `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                    variant="outlined"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    sx={{
                      "& fieldset": { borderColor: "#e6e6e6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "5px",
                      },
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[4px] min-w-[335px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`City `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
                    <TextField
                      className="[border:none] bg-[transparent] h-[50px] flex-1 relative max-w-full"
                      variant="outlined"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      sx={{
                        "& fieldset": { borderColor: "#ddd" },
                        "& .MuiInputBase-root": {
                          height: "50px",
                          backgroundColor: "#f9f9f9",
                          borderRadius: "5px",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-1.5 pl-0 box-border gap-[38px_32px] max-w-full mq750:gap-[38px_32px]">
                <div className="w-[483px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`Birthdate `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <textField
                    className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                    value={birthdateInputDateTimePickerValue}
                    onChange={(newValue) => {
                      setBirthdateInputDateTimePickerValue(newValue);
                    }}
                    slotProps={{
                      textField: {
                        variant: "standard",
                        size: "medium",
                        fullWidth: true,
                        //         required: true,
                        color: "info",
                      },
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e6e6e6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "5px",
                      },
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[335px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`Email `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      "& fieldset": { borderColor: "#e6e6e6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "5px",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-1.5 pl-0 box-border gap-[38px_32px] max-w-full mq750:gap-[38px_32px]">
                <div className="w-[483px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`Choose a Strong Password `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[50px] relative"
                    variant="outlined"
                    type={showPassword1 ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={getPasswordHelperText(password) !== ''}
                    helperText={getPasswordHelperText(password)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleShowPasswordClick1}
                            aria-label="toggle password visibility"
                          >
                            <Icon>
                              {showPassword1 ? "visibility_off" : "visibility"}
                            </Icon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e6e6e6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "5px",
                      },
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[335px] max-w-full">
                  <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                    <span>{`Confirm Password `}</span>
                    <span className="text-orangered-100">*</span>
                  </div>
                  <TextField
                    className="border-none bg-transparent self-stretch h-50 relative"
                    variant="outlined"
                    type={showPassword2 ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleShowPasswordClick2}
                            aria-label="toggle password visibility"
                          >
                            <Icon>
                              {showPassword2 ? "visibility_off" : "visibility"}
                            </Icon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#e6e6e6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "5px",
                      },
                    }}
                  />

                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-[18px] text-black">
                <div className="relative capitalize font-semibold" >
                  Upload Your Photo
                </div>
                <div className="self-stretch rounded-3xs bg-orangered-200 box-border flex flex-col items-center justify-start pt-[33px] pb-[25px] pr-6 pl-5 gap-[2px] max-w-full text-center text-base border-[1px] border-dashed border-darkblue-100">
                  <div className="w-[1004px] h-[102px] relative rounded-3xs bg-orangered-200 box-border hidden max-w-full border-[1px] border-dashed border-darkblue-100" />
                  <div className="w-[408px] relative inline-block max-w-full z-[1]">
                    <span className="font-medium">{`Drag your images here, or `}</span>
                    <label className="text-royalblue font-bold hover:cursor-pointer" htmlFor="fileInput" onClick={handleUpload} >browse</label>
                    <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef} 
                  />
                  </div>
                   
                  <div className="w-[242.7px] relative text-[12px] font-medium text-gray whitespace-pre-wrap inline-block z-[1]">
                    {str}
                  </div>
                </div>
              </div>
            </div>
            <footer
              className="self-stretch rounded-[9.08px] bg-darkblue-100 flex flex-row flex-wrap items-center justify-center p-[21px] cursor-pointer text-left text-[21.8px] text-white font-inter hover:bg-darkblue-200 hover:cursor-pointer active:bg-midnightblue"
              onClick={onBecomeMemberBtnClick}
            >
              <div className="relative tracking-[0.18px] leading-[25.42px] font-medium mq450:text-mid mq450:leading-[20px]"
              onClick = {handleSubmit}>
                Continue
              </div>
            </footer>
          </div>
          <div
            className="self-stretch relative leading-[32px] capitalize font-medium [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] mq450:text-base mq450:leading-[26px]"
            data-animate-on-scroll
          >
            Step 1 of 2
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignupUserInformation;
