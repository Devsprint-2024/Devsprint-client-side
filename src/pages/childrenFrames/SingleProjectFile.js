import { useState, useCallback } from "react";
import AddCollaboratorPopup from "../../components/popups/AddCollaboratorPopup";
import PortalPopup from "../../components/portals/PortalPopup";
import ProjectCode from "../../components/datagrids/ProjectCode";

const SingleProjectFile = () => {
  const [isAddCollaboratorPopupOpen, setAddCollaboratorPopupOpen] =
    useState(false);

  const openAddCollaboratorPopup = useCallback(() => {
    setAddCollaboratorPopupOpen(true);
  }, []);

  const closeAddCollaboratorPopup = useCallback(() => {
    setAddCollaboratorPopupOpen(false);
  }, []);

  const name = localStorage.getItem('projectName');

  const handleCommitHistoryClick = () => {
    localStorage.setItem('selectedFrame','commitHistory');
    window.location.reload();
  }

  return (
    <>
      <div className="w-[1410px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[3px] pb-12 pr-4 pl-2 box-border gap-[19px]">
        <header className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[46px] text-left text-7xl text-black font-inter">
          <div className="self-stretch flex flex-row items-end justify-start gap-[47px]">
            <h2 className="m-0 flex-1 relative text-inherit capitalize font-medium font-inherit">
             {name}
            </h2>
            <div
              className="w-[237px] flex flex-row items-center justify-start gap-[7px] cursor-pointer z-[1] text-base text-blueviolet-100"
              onClick={openAddCollaboratorPopup}
            >
              <div className="h-[39px] w-[163px] relative bg-red-100 overflow-hidden shrink-0 hidden" />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="w-[18px] h-[18px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-[18px] h-[18px]"
                    alt=""
                    src="/littleAddButton.svg"
                  />
                </div>
              </div>
              <div className="h-[19px] w-[42px] relative">
                <div className="absolute top-[0px] left-[0px] capitalize font-medium">
                  Invite
                </div>
              </div>
              <div className="h-[39px] flex-1 relative bg-crimson overflow-hidden" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between text-mini text-darkslateblue">
            <div className="w-[241px] flex flex-row items-start justify-start gap-[26px]">
              <div className="h-[25px] w-[95px] flex flex-col items-start justify-start gap-[3px]">
                <div className="h-[22px] relative capitalize font-medium inline-block shrink-0">
                  Source Files
                </div>
                <div className="self-stretch h-0.5 relative" >
                   <ProjectCode />
                </div>
              </div>
              <div className="h-[25px] flex-1 flex flex-col items-start justify-start gap-[3px]">
                <div
                  className="w-full [border:none] [outline:none] font-medium font-inter text-mini bg-[transparent] self-stretch h-[22px] relative capitalize text-text text-left inline-block shrink-0 min-w-[72px]
                  hover:font-bold hover:cursor-pointer"
                  onClick={handleCommitHistoryClick}
                >
                Commit History
                </div>
              </div>
            </div>
            <div className="relative text-sm text-darkslategray-100 text-right cursor-pointer hover:[text-decoration:underline]">
              + Upload new file
            </div>
          </div>
        </header>
        <section className="self-stretch h-[442px]">
          <div className="h-[442px] w-[1380px] relative box-border hidden border-[1px] border-solid border-black" />
          <div className="h-[58px] flex-1 relative bg-whitesmoke-200 overflow-hidden z-[1]" />
        </section>
      </div>
      {isAddCollaboratorPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddCollaboratorPopup}
        >
          <AddCollaboratorPopup onClose={closeAddCollaboratorPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default SingleProjectFile;