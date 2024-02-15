import SearchResultsDatagrid from "../../components/datagrids/SearchResultsDatagrid";

const SearchResults = () => {
    return (
      <div className="w-[1424px] bg-white overflow-hidden flex flex-col items-start justify-start pt-4 pb-[60px] pr-[43px] pl-3.5 box-border gap-[4px]">
        <header className="self-stretch h-[54px] relative text-7xl capitalize font-medium font-inter text-black text-left inline-block shrink-0">
          14 Projects found for “Mobile Development”
        </header>
        <footer className="self-stretch h-[476px] relative verflow-hidden shrink-0" >
          <SearchResultsDatagrid />
        </footer>
      </div>
    );
  };
  
  export default SearchResults;  