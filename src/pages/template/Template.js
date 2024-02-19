import { useState, useCallback, useEffect } from "react";
import Drawer from "../../components/drawer/Drawer";
import PortalDrawer from "../../components/portals/PortalDrawer";
import Explore from "../childrenFrames/Explore";
import Profile from "../childrenFrames/Profile";
import OpenSourceProjects from "../childrenFrames/OpenSourceProjects";
import MyProjects from "../childrenFrames/MyProjects";
import SearchResults from "../childrenFrames/SearchResults";
import CreateProject from "../childrenFrames/CreateProject";
import CodeEditor from "../childrenFrames/CodeEditor";
import CommitHistory from "../childrenFrames/CommitHistory";
import ActiveDomains from "../childrenFrames/ActiveDomains";
import axios from 'axios';
import SingleProjectFile from "../childrenFrames/SingleProjectFile";

function Template({ children }) {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState(localStorage.getItem('selectedFrame'));
  const [selectedOption, setSelectedOption] = useState(null);

  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [pic, setPic] = useState(null);
  const id = localStorage.getItem('userID');
  
  useEffect(() => {
    axios.get(`http://localhost:5000/fetch-profile-info/${id}`)
      .then(response => {
        const data = response.data; 
        setName(data.user.FirstName+" "+data.user.LastName);
        setCity(data.user.City);
        setCountry(data.user.Country);
        setPic(data.user.Profile_Pic);
      })
      .catch(error => {
        console.error('Error fetching profile information:', error);
      });
  }, [id]); 
  
  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const handleOptionClick = useCallback((option) => {
    setSelectedFrame(option);
    openFrame();
  }, [openFrame]);

  const handleChildrenClick = useCallback((option) => {
    setSelectedFrame(option);
  }, []);


  useEffect(() => {
    localStorage.setItem('selectedFrame', selectedFrame);
  }, [selectedFrame]); 
  

  return (
    <>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border gap-[12px] tracking-[normal] text-right text-base text-gray-100 font-inter">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq825:flex-wrap">
            <div className="w-[496px] flex flex-row items-start justify-start gap-[22px] max-w-full mq450:flex-wrap">
              <div className="h-[25px] w-[57px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[29px] h-[25px] overflow-hidden object-cover"
                  loading="eager"
                  alt=""
                  src="/logo.png"
                />
                <img
                  className="absolute top-[4px] left-[31px] w-[26px] h-5 object-contain cursor-pointer"
                  loading="eager"
                  alt=""
                  src="/openArrowDrawer.png"
                  onClick={openFrame}
                />
              </div>
              <div className="flex-1 rounded-md bg-whitesmoke flex flex-row items-center justify-start py-0 px-[9px] box-border gap-[10px] min-w-[159px] max-w-full">
                <div className="self-stretch w-[417px] relative rounded-md bg-whitesmoke hidden max-w-full" />
               
                <input
                  className="w-[380px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[33px] relative text-slategray text-left flex items-center z-[1]"
                  placeholder="Search for anything..."
                  type="search"
                />
                 <img
                  className="h-[18px] w-[18px] relative z-[1] hover:cursor-pointer"
                  onClick = {() => handleChildrenClick("searchResults")}
                  alt=""
                  src="/searchButtonIcon.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[37px] mq450:gap-[37px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[13px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/viewCalendar.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/viewNotification.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <div className="flex flex-col items-end justify-start gap-[3px]">
                  <div className="relative">{name}</div>
                  <div className="relative text-sm text-slategray">
                    {city+", "+country}
                  </div>
                </div>
                <img
                  className="h-[38px] w-[38px] relative object-cover rounded-[200px]"
                  loading="eager"
                  alt=""
                  src={pic}
                />
              </div>
            </div>
          </div>
        </div>
        <svg width="1530" height="1">
          <line x1="0" y1="0" x2="1530" y2="0" stroke="lightgray" strokeWidth="2" />
        </svg>
        <div className="px-10 width-full"> 
          {selectedFrame === "explore" && <Explore onSelectOption = {handleChildrenClick}/>}
          {selectedFrame === "profile" && <Profile />}
          {selectedFrame === "engineeringCard" && <OpenSourceProjects />}
          {selectedFrame === "artsCard" && <OpenSourceProjects />}
          {selectedFrame === "designCard" && <OpenSourceProjects />}
          {selectedFrame === "educatiionCard" && <OpenSourceProjects />}
          {selectedFrame === "scienceCard" && <OpenSourceProjects />}
          {selectedFrame === "myProjects" && <MyProjects onSelectOption={handleChildrenClick} />}
          {selectedFrame === "createProject" && <CreateProject />}
          {selectedFrame === "searchResults" && <SearchResults />}
          {selectedFrame === "singleProjectFile" && <SingleProjectFile />}
          {selectedFrame === "commitHistory" && <CommitHistory />}
          {selectedFrame === "codeEditor" && <CodeEditor />}
          {selectedFrame === "activeDomains" && <ActiveDomains />}
          {selectedFrame === "" && <Profile />}
        </div>
       
      </div>
      {isFrameOpen && (
        <PortalDrawer placement="Left" onOutsideClick={closeFrame}>
          <Drawer onClose={closeFrame} onSelectOption={handleOptionClick}  />
        </PortalDrawer>
      )}
    </>
  );
};

export default Template;
