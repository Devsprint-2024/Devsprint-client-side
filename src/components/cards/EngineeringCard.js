import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const EngineeringCard = ({ activeMembers, showEngineering, onSelectOption }) => {
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    onSelectOption(option);
  };

  return (
    <div className="rounded-mini bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-start py-[13px] pr-[11px] pl-5 box-border gap-[43px] max-w-full text-left text-lg text-black font-inter mq450:flex-wrap mq450:gap-[43px] hover:cursor-pointer hover:[box-border border-1px]"
     onClick={() => handleOptionClick("engineeringCard")}
    >
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[108px] mq450:flex-1"
      >
        <div className="flex flex-col items-start justify-start gap-[73px]">
          <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit">
            Engineering
          </h3>
          {showEngineering && (
            <div className="relative text-xs capitalize font-light">
              {activeMembers}
            </div>
          )}
        </div>
      </div>
      <img
        className="h-[124px] w-44 relative object-cover mq450:flex-1"
        loading="eager"
        alt=""
        src="/engineering.png"
      />
    </div>
  );
};

export default EngineeringCard;
