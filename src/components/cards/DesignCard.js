const DesignCard = ({ activeMembers, showDesign }) => {
  return (
    <div className="flex-1 rounded-mini bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-between pt-1.5 pb-[7px] pr-0 pl-5 box-border min-w-[233px] gap-[20px] max-w-full text-left text-lg text-black font-inter mq450:flex-wrap mq450:pr-5 mq450:box-border mq650:flex-1">
      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[107px] mq450:flex-1">
        <div className="flex flex-col items-start justify-start gap-[73px]">
          <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit">
            Design
          </h3>
          {showDesign && (
            <div className="relative text-xs capitalize font-light">
              {activeMembers}
            </div>
          )}
        </div>
      </div>
      <img
        className="h-[137px] w-[171px] relative object-cover mq450:flex-1"
        loading="eager"
        alt=""
        src="/design.png"
      />
    </div>
  );
};

export default DesignCard;
