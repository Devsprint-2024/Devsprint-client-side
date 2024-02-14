import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Drawer({ onClose, onSelectOption }) {
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    onSelectOption(option);
    onClose(); 
  };
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

  const onFrameContainer1Click = useCallback(() => {
    navigate("/template");
  }, [navigate]);

  return (
    <div
      className="shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] marginRight-[100px]  w-[264px] bg-white overflow-hidden flex flex-row items-center justify-start py-0 pr-1 pl-0 box-border gap-[2px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] h-full max-w-[90%]"
      data-animate-on-scroll
    >
      <section className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[15px] text-left text-xl text-slategray font-lalezar">
        <div className="self-stretch flex flex-col items-center justify-start gap-[346px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[28px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[25px]">
                <div className="flex-1 flex flex-row items-center justify-between">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-[25px] w-[29px] relative overflow-hidden shrink-0 object-cover"
                      loading="eager"
                      alt=""
                      src="/logo.png"
                    />
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <div className="h-[31px] relative text-transparent !bg-clip-text [background:linear-gradient(180deg,_#7450a8,_#6976e3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center">
                        NEXUS
                      </div>
                    </div>
                  </div>
                  
                  <img
                    className="h-[-2px] w-[20px] right-5 absolute cursor-pointer"
                    loading="eager"
                    alt=""
                    src="/closeDrawerArrow.svg"
                    onClick={onClose}
                  />
                  
                </div>
                
              </div>
              <svg width="1530" height="1">
                <line x1="0" y1="0" x2="1530" y2="0" stroke="lightgray" strokeWidth="2" />
             </svg>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-[18px] gap-[15px] text-base font-inter">
              <div className="self-stretch rounded-md hover:bg-blueviolet-200 bg-transparent overflow-hidden flex flex-row items-center justify-start pt-[3px] px-[5px] pb-[5px] hover:cursor-pointer "
               onClick={() => handleOptionClick("profile")}>
                <div className="flex flex-row items-end justify-start gap-[11px]">
                  <img
                    className="h-[29px] w-[29px] relative"
                    alt=""
                    src="/profileIcon.svg"
                  />
                  <div
                    className="w-[calc(100%_-_29px)] [border:none] [outline:none] font-medium font-inter text-base bg-[transparent] h-8 relative text-slategray text-left flex items-center min-w-[29px]
                    "
                  >
                  Profile 
                  </div>
                </div>
              </div>
              <div
                className="self-stretch rounded-md overflow-hidden flex flex-row items-center justify-start py-0 px-1.5 hover:cursor-pointer hover:bg-blueviolet-200 bg-transparent"
                onClick={() => handleOptionClick("myProjects")}
              >
                <div className="flex flex-row items-center justify-start py-2 px-0 gap-[14px]">
                  <img
                    className="h-6 w-6 relative"
                    loading="eager"
                    alt=""
                    src="/projectIcon.svg"
                  />
                  <div className="relative font-medium">Projects</div>
                </div>
              </div>
              <div className="self-stretch rounded-md overflow-hidden flex flex-row items-center justify-start py-0 px-[7px] hover:cursor-pointer hover:bg-blueviolet-200 bg-transparent">
                <div className="flex flex-row items-center justify-start pt-2.5 px-0 pb-[9px] gap-[15px] ">
                  <img
                    className="h-[21px] w-[21px] relative min-h-[21px]"
                    loading="eager"
                    alt=""
                    src="/chatIcon.svg"
                  />
                  <div className="relative font-medium">Message</div>
                </div>
              </div>
              <div className="self-stretch rounded-md overflow-hidden flex flex-row items-center justify-start py-0 pr-[13px] pl-[3px] hover:cursor-pointer hover:bg-blueviolet-200 bg-transparent">
                <div className="flex flex-row items-end justify-start py-[9px] px-0 gap-[5px]"
                onClick={() => handleOptionClick("explore")}
                >
                  <img
                    className="h-[22.5px] w-[30px] relative"
                    loading="eager"
                    alt=""
                    src="/exploreIcon.svg"
                  />
                  <div className="relative font-medium">
                    Explore Disciplines
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[19px]">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[0px]">
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/vector-16.svg"
              />
              <div className="self-stretch rounded-md bg-transparent overflow-hidden flex flex-row items-center justify-start pt-[0px] hover:cursor-pointer hover:bg-crimson pb-[0px] pr-[27px] pl-[5px] gap-[3px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/iconoirlogout.svg"
                />
                <div
                  className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-medium font-inter text-base bg-[transparent] h-8  flex-1 relative text-indianred text-left flex items-center min-w-[92px]"
                >
                Log out
               </div>
              </div>
              
            </div>
          </div>

         

        </div>
        

      </section>
      
    
  
    </div>
  );
};

export default Drawer;