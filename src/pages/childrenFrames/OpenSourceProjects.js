import ExploreProjectsDatagrid from  '../../components/datagrids/ExploreProjectsDatagrid';

const OpenSourceProjects = () => {
    return (
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[33px] pb-9 pr-[33px] pl-[21px] box-border gap-[35px]">
        <header className="self-stretch relative text-7xl capitalize font-medium font-inter text-black text-left">
          Open Source Projects for engineering Discliplines
        </header>
        <section className="self-stretch w-[1200px] h-[496px] relative">
          <ExploreProjectsDatagrid />
        </section>
      </div>
    );
  };
  
  export default OpenSourceProjects;  