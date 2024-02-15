const CodeEditor = () => {
    return (
      <div className="w-[1416px] bg-white overflow-hidden flex flex-col items-start justify-start pt-[30px] pb-[38px] pr-6 pl-2.5 box-border gap-[54px] tracking-[normal] text-left text-7xl text-black font-inter mq700:gap-[54px]">
        <h2 className="m-0 w-[1101px] relative text-inherit capitalize font-medium font-inherit inline-block max-w-full mq450:text-2xl">
          Native CRUD Operation (Mobile Application Project)
        </h2>
        <section className="self-stretch h-[574px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[16px] text-left text-mini text-text font-inter">
          <div className="w-[203px] h-[22px] relative capitalize font-medium inline-block shrink-0">{`server.js > Code editor`}</div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[39px] mq650:gap-[39px]">
            <footer className="self-stretch flex-1 relative bg-black border-[1px] border-solid border-black" />
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-3">
              <button className="cursor-pointer [border:none] pt-3.5 px-3.5 pb-[15px] bg-darkblue-100 rounded-[9.08px] flex flex-row flex-wrap items-center justify-center whitespace-nowrap hover:bg-mediumslateblue hover:cursor-pointer active:bg-midnightblue-100">
                <div className="relative text-2xl-8 tracking-[0.18px] leading-[25.42px] font-medium font-inter text-white text-left">
                  Commit Changes
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default CodeEditor;  