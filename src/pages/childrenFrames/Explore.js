import EngineeringCard from "../../components/cards/EngineeringCard";
import ArtsCard from "../../components/cards/ArtsCard";
import ScienceCard from "../../components/cards/ScienceCard";
import EducationCard from "../../components/cards/EducationCard";
import DesignCard from "../../components/cards/DesignCard";

const Explore = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-wrap items-start justify-start pt-7 px-[20px] pb-[106px] box-border gap-[54px] tracking-[normal] text-left text-[26px] text-black font-inter mq625:gap-[54px]">
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[27px] max-w-full">
        <h2 className="m-0 self-stretch relative text-inherit capitalize font-medium font-inherit mq450:text-[21px]">
          Explore Discliplines
        </h2>
        <div className="self-stretch relative text-base">{`Explore our five major disciplines and contribute to the open source projects aligned with your interests. `}</div>
      </div>
      <section className="w-[1146px] flex flex-col items-start justify-start gap-[43px] max-w-full mq625:gap-[43px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[29px] max-w-full">
          <EngineeringCard activeMembers="14 active members" showEngineering />
          <ArtsCard activeMembers="5 active members" showArts />
          <ScienceCard activeMembers="3 active members" showScience />
        </div>
        <div className="w-[744px] flex flex-row items-start justify-start gap-[28px] max-w-full mq650:flex-wrap">
          <EducationCard activeMembers="6 active members" showEducation />
          <DesignCard activeMembers="10 active members" showDesign />
        </div>
      </section>
    </div>
  );
};

export default Explore;
