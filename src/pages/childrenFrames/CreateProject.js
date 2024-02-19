import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import disciplinesData from "../data/disciplinesData";

const CreateProject = () => {

  const handleGoBackButtonClick = () => {
    localStorage.setItem('selectedFrame','myProjects');
    window.location.reload();
  }

  const [projectName, setName] = useState(null);
  const [projectType, setType] = useState(null);
  const [projectDescription, setDescription] = useState(null);

  const handleChange = (event, newValue) => {
    setType(newValue.discipline);
  };

  const id = localStorage.getItem('userID');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      name: projectName,
      type: projectType,
      description: projectDescription,
    }
    fetch(`http://localhost:5000/create-project/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    })
      .then((response) => {
        if (response.status === 200) {
          window.alert("project creation successful!");
          localStorage.setItem('selectedFrame','myProjects');
          window.location.reload();
        } 
      })
      .catch((error) => {
        console.log("Error occurred:", error);
      
      });
  }

    return (
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-4 pb-9 pr-[33px] pl-[21px] box-border gap-[62px] tracking-[normal] text-left text-7xl text-black font-inter mq450:gap-[62px] mq725:gap-[62px]">
      <div className="m-0 flex items-center gap-[10px] max-w-full shrink-0">
        <div className="relative text-inherit capitalize font-medium font-inherit inline-block max-w-full shrink-0 mq450:text-2xl hover:cursor-pointer hover:[text-decoration:underline]"
        onClick = {handleGoBackButtonClick}
        >Go Back to My Projects</div>
        <div className="m-0 text-inherit capitalize font-medium font-inherit max-w-full shrink-0 mq450:text-2xl">> Create New project</div>
      </div>

        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full shrink-0 mq650:gap-[32px]"
        onSubmit={handleSubmit}>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
            <div className="w-[673px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
              <div className="relative text-3xl-5 font-semibold font-open-sans text-darkslategray-200 text-left mq450:text-lg">
                Project Title
              </div>
              <div className="relative text-3xl-5 font-semibold font-open-sans text-darkslategray-200 text-left mq450:text-lg">
                Project Type
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[46px] max-w-full mq650:gap-[46px]">
              <input
                className="[outline:none] bg-[transparent] h-[52px] w-[492px] relative rounded-mini box-border max-w-full border-[1.5px] border-solid border-gainsboro"
                type="text"
                value = {projectName}
                onChange={(e) => setName(e.target.value)}
              />
            
              <Autocomplete
              id="country-select-demo"
              className="[outline:none] bg-[transparent] h-[52px] flex-1 relative  min-w-[300px] max-w-full"
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
                  placeholder="Select Project Type"
                
                />
              )}
            />

            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[13px] gap-[10px]">
            <div className="relative text-3xl-5 font-semibold font-open-sans text-darkslategray-200 text-left mq450:text-lg">
              Project Description
            </div>
            <textarea
              className="[outline:none] bg-[transparent] self-stretch h-[106px] relative rounded-mini box-border min-w-[250px] border-[1.5px] border-solid border-gainsboro"
              type="text"
              value = {projectDescription}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>      
          
          <div className="flex flex-row items-start justify-start pt-0 px-[9px] pb-[26px] box-border max-w-full">

          </div>
          
          <div className="h-[47px] flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border">
            <button className="cursor-pointer [border:none] pt-[5px] pb-1.5 pr-[9px] pl-[11px] bg-darkblue-100 rounded-[9.08px] flex flex-row flex-wrap items-center justify-center whitespace-nowrap hover:bg-mediumslateblue hover:cursor-pointer active:bg-midnightblue">
              <div className="relative text-mini tracking-[0.18px] leading-[25.42px] font-medium font-inter text-white text-left"
              type="submit"
              >
                Create Project
              </div>
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default CreateProject;  