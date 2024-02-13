const EducationCard = ({ activeMembers, showEducation }) => {
  return (
    <div className="flex-[0.9349] rounded-mini bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-end justify-between pt-3.5 pb-[18px] pr-[22px] pl-5 box-border min-w-[233px] gap-[20px] max-w-full text-left text-lg text-black font-inter mq450:flex-wrap mq650:flex-1">
      <div className="flex flex-col items-start justify-start gap-[73px] min-w-[102px] mq450:flex-1">
        <h3 className="m-0 relative text-inherit capitalize font-medium font-inherit">
          Education
        </h3>
        {showEducation && (
          <div className="relative text-xs capitalize font-light">
            {activeMembers}
          </div>
        )}
      </div>
      <img
        className="h-[118px] w-[147px] relative object-cover mq450:flex-1"
        loading="eager"
        alt=""
        src="/education.png"
      />
    </div>
  );
};

export default EducationCard;
