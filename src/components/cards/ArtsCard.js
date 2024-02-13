const ArtsCard = ({ activeMembers, showArts }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border min-w-[242px] max-w-full text-left text-lg text-black font-inter">
      <div className="self-stretch rounded-mini bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-start pt-3.5 pb-2 pr-0 pl-5 gap-[43px] mq450:flex-wrap mq450:gap-[43px] mq450:pr-5 mq450:box-border">
        <div className="flex flex-col items-start justify-start gap-[73px] min-w-[102px] mq450:flex-1">
          <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit">
            Arts
          </h3>
          {showArts && (
            <div className="relative text-xs capitalize font-light">
              {activeMembers}
            </div>
          )}
        </div>
        <img
          className="h-32 w-[193px] relative object-contain mq450:flex-1"
          loading="eager"
          alt=""
          src="/arts.png"
        />
      </div>
    </div>
  );
};

export default ArtsCard;
