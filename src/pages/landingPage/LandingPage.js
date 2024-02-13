import { useCallback } from "react";
import ExtendedLogo from "../../components/logo/ExtendedLogo";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const onCallToActionClick = useCallback(() => {
    navigate("/user-information");
  }, [navigate]);
  
  const onSignInClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[38px] pb-[93px] pr-[67px] pl-[35px] box-border gap-[59px] tracking-[normal] mq750:pr-[33px] mq750:box-border mq450:gap-[59px]">
      <section className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-[45px] text-darkslateblue font-lalezar">
        <div className="w-[1218px] flex flex-col items-start justify-start gap-[18px] max-w-full">
          <ExtendedLogo />
          <div className="self-stretch flex flex-row items-start justify-end">
            <h1 className="m-0 h-[71px] relative text-inherit font-normal font-inherit inline-block mq750:text-[36px] mq450:text-[27px]">
              Welcome to Nexus: Your Collaborative Project Hub
            </h1>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[35px] box-border max-w-full text-left text-[15px] text-black font-poppins">
        <div className="flex-1 flex flex-row items-start justify-start gap-[51px] max-w-full mq750:gap-[51px] mq1275:flex-wrap">
          <img
            className="h-[519px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[461px] mq750:min-w-full"
            loading="eager"
            alt=""
            src="/introductionPic.png"
          />
          <div className="w-[633px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[633px] max-w-full mq1100:min-w-full mq1275:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[34px] mq750:gap-[34px]">
              <div className="self-stretch relative">
                <p className="m-0">
                  At Nexus, we believe in the power of collaboration to drive
                  innovation and success. Our platform is designed to bring
                  together diverse teams and disciplines to work seamlessly on
                  projects that matter.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Sign up for an account and start exploring the endless
                  possibilities of collaborative project management with Nexus.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-[24px] text-smi">
                <button
                  className="cursor-pointer [border:none] pt-[13px] pb-3 pr-3 pl-[17px] bg-darkblue-100 rounded-[9.08px] flex flex-row flex-wrap items-center justify-center whitespace-nowrap hover:bg-mediumslateblue hover:gap-[10px_0px] hover:cursor-pointer active:bg-midnightblue"
                  onClick={onCallToActionClick}
                >
                  <b className="relative text-smi capitalize font-inter text-white text-center">
                    Get started
                  </b>
                </button>
                <div className="flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative whitespace-nowrap">
                    Already have an account?
                  </div>
                  <div className="relative font-medium whitespace-nowrap hover:cursor-pointer hover:[text-decoration:underline]"
                  onClick = {onSignInClick}
                  >
                    Sign in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
