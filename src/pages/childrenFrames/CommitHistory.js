const CommitHistory = () => {
    return (
      <div className="w-[1416px] bg-white overflow-hidden flex flex-col items-center justify-start pt-[30px] pb-[62px] pr-6 pl-3 box-border gap-[36px]">
        <header className="self-stretch flex flex-row items-start justify-start text-left text-7xl text-black font-inter">
          <div className="flex-1 relative capitalize font-medium">{`Track commits for Native Project `}</div>
        </header>
        <footer className="self-stretch h-[568px] relative bg-red-200 overflow-hidden shrink-0" />
      </div>
    );
  };
  
  export default CommitHistory;  