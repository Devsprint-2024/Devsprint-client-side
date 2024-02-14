import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MyProjects = ({onSelectOption}) => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    onSelectOption(option);
  };

  return (
    <div className="w-[1434px] bg-white overflow-hidden flex flex-col items-start justify-start pt-4 pb-9 pr-[33px] pl-[21px] box-border gap-[32px] tracking-[normal] text-left text-7xl text-black font-inter mq725:gap-[32px]">
      <h1 className="m-0 w-[1101px] relative text-inherit capitalize font-medium font-inherit inline-block max-w-full mq450:text-2xl">
        My Projects
      </h1>
      <section className="self-stretch h-[516px] flex flex-col items-start justify-start gap-[23px] max-w-full">
        <header className="self-stretch h-8 flex flex-row items-center justify-between gap-[20px] max-w-full text-right text-smi text-darkslategray-100 font-inter">
          <div className="self-stretch w-[326px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq450:hidden">
            <button className="cursor-pointer pt-1.5 pb-[5px] pr-[11px] pl-2 bg-[transparent] flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-blue-200 hover:bg-mediumblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumblue-100">
              <div className="w-[74px] relative text-xs capitalize font-medium font-inter text-blue-200 text-center inline-block shrink-0">
                Owned
              </div>
            </button>
            <button className="cursor-pointer pt-1.5 pb-[5px] pr-[11px] pl-2 bg-[transparent] flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-orangered-500 hover:bg-orangered-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-orangered-300">
              <div className="relative text-xs capitalize font-medium font-inter text-orangered-500 text-center">
                In-progress
              </div>
            </button>
            <button className="cursor-pointer pt-1.5 pb-[5px] pr-[11px] pl-2 bg-[transparent] flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-darkgreen hover:bg-forestgreen-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-forestgreen-100">
              <div className="w-[74px] relative text-xs capitalize font-medium font-inter text-darkgreen text-center inline-block shrink-0">
                Completed
              </div>
            </button>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div
              className="relative capitalize font-medium whitespace-nowrap cursor-pointer"
              onClick={() => handleOptionClick("createProject")}
            >
              +Create new Project
            </div>
          </div>
        </header>
        <div className="self-stretch flex-1 relative bg-blue-300" />
      </section>
    </div>
  );
};

export default MyProjects;