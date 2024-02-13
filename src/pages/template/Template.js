import { useState, useCallback } from "react";
import Drawer from "../../components/drawer/Drawer";
import PortalDrawer from "../../components/portals/PortalDrawer";
import Explore from "../childrenFrames/Explore";
import Profile from "../childrenFrames/Profile";

function Template({ children }) {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState(null);

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


  switch (selectedFrame) {
    case "explore":
      children = <Explore />;
      break;
    case "profile":
      children = <Profile />;
      break;
    default:
      children = <Profile />;
  }

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
                <img
                  className="h-[18px] w-[18px] relative z-[1]"
                  alt=""
                  src="/searchButtonIcon.svg"
                />
                <input
                  className="w-[141px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-[33px] relative text-slategray text-left flex items-center z-[1]"
                  placeholder="Search for anything..."
                  type="text"
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
                  <div className="relative">Mayeesha Musarrat</div>
                  <div className="relative text-sm text-slategray">
                    Dhaka,Bangladesh
                  </div>
                </div>
                <img
                  className="h-[38px] w-[38px] relative object-cover"
                  loading="eager"
                  alt=""
                  src="/mask-group@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <svg width="1530" height="1">
          <line x1="0" y1="0" x2="1530" y2="0" stroke="lightgray" strokeWidth="2" />
        </svg>
        <div className="px-10 width-full"> 
          {children}
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
