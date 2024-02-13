import PieChart from "../../components/charts/PieChart";

const Profile = () => {
  return (
    <div className="w-[1401px] bg-white overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[29px] pb-[23px] pr-14 pl-[38px] box-border gap-[31px] tracking-[normal] text-left text-base text-text font-roboto mq700:gap-[31px] mq700:pr-7 mq700:box-border">
      <div className="w-[275px] rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[34px] pb-[118px] pr-[27px] pl-7 box-border gap-[22px] mq650:pt-[22px] mq650:pb-[77px] mq650:box-border">
        <div className="w-[204px] flex flex-row items-start justify-start py-0 pr-[30px] pl-5 box-border">
          <div className="flex-1 flex flex-row items-center justify-center">
            <div className="h-[154px] flex-1 relative">
              <img
                className="absolute w-[calc(100%_-_10px)] top-[5px] right-[5px] left-[5px] rounded-[200px] max-w-full overflow-hidden h-36 object-cover"
                loading="eager"
                alt=""
                src="/profilepic.png"
              />
              <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-primary-brand" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start py-0 px-5 text-center">
          <b className="relative tracking-[0.2px] leading-[24px]">
            Mayeesha Musarrat
          </b>
          <div className="relative tracking-[0.2px] leading-[24px]">
            Ahmedabad, Gujarat
          </div>
        </div>
        <div className="self-stretch h-[35px] flex flex-col items-start justify-start gap-[11px]">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-secondary-brand" />
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="h-6 w-6 relative">
                <img
                  className="absolute top-[4px] left-[4px] w-4 h-4 z-[1]"
                  loading="eager"
                  alt=""
                  src="/person.svg"
                />
              </div>
              <div className="relative tracking-[0.2px] leading-[24px]">
                UI - Intern
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[37px] flex flex-col items-start justify-start gap-[13px]">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-secondary-brand" />
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="eager"
                alt=""
                src="/contact.svg"
              />
              <div className="relative tracking-[0.2px] leading-[24px] whitespace-nowrap">
                +91 7048144030
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[42px] pl-1.5">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/mail.svg"
            />
            <div className="relative tracking-[0.2px] leading-[24px] whitespace-nowrap">
              yghori@asite.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border min-w-[342px] max-w-full text-center mq650:min-w-full">
        <div className="self-stretch h-[550px] rounded-xl bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[25px] pb-[41px] pr-6 pl-[21px] box-border gap-[23px] max-w-full mq650:pt-5 mq650:pb-[27px] mq650:box-border">
          <b className="w-[114px] h-[35px] relative tracking-[0.2px] leading-[24px] flex items-center justify-center shrink-0">
            Worked In
          </b>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
            <div className="self-stretch flex-1 relative bg-red overflow-hidden max-w-full" />
          </div>
        </div>
      </div>
      <div className="h-[550px] w-[444px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[25px]">
          <PieChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Profile;