const ScienceCard = ({ activeMembers, showScience }) => {
  return (
    <div className="w-[358px] rounded-mini bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] overflow-hidden shrink-0 flex flex-row items-end justify-between pt-3.5 pb-[15px] pr-1.5 pl-5 box-border gap-[20px] max-w-full text-left text-lg text-black font-inter mq450:flex-wrap">
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px]">
        <div className="flex flex-col items-start justify-start gap-[73px]">
          <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit">
            Science
          </h3>
          {showScience && (
            <div className="relative text-xs capitalize font-light">
              {activeMembers}
            </div>
          )}
        </div>
      </div>
      <img
        className="h-[121px] w-[130px] relative object-cover"
        loading="eager"
        alt=""
        src="/science.png"
      />
    </div>
  );
};

export default ScienceCard;
