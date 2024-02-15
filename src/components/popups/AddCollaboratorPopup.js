const AddCollaboratorPopup = ({ onClose }) => {
    return (
      <div className="w-[542px] rounded-3xs bg-white shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-6 px-0 pb-[45px] box-border gap-[8px] max-w-full max-h-full text-center text-base text-black font-inter">
        <div className="self-stretch h-[30px] relative inline-block shrink-0">
          Add Collaborators with similar skills
        </div>
        <div className="self-stretch h-[73px] flex flex-col items-center justify-start pt-0 px-0 pb-[13px] box-border gap-[21px]">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-silver" />
          <div className="w-[472px] flex-1 relative bg-red-100 overflow-hidden" />
        </div>
        <section className="w-[470px] h-[166px] relative bg-midnightblue-200 overflow-hidden shrink-0" />
      </div>
    );
  };
  
  export default AddCollaboratorPopup;  