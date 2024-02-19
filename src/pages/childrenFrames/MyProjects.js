import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyProjectsDatagrid from "../../components/datagrids/MyProjectsDatagrid";
import axios from 'axios';

const MyProjects = ({onSelectOption}) => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    onSelectOption(option);
  };

  const id = localStorage.getItem('userID');
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    axios.get(`http://localhost:5000/fetch-my-projects/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile information:', error);
      });
  }, [id]); 

  console.log(data);
  

  return (
    <div className="w-[1434px] bg-white overflow-hidden flex flex-col items-start justify-start pt-4 pb-9 pr-[33px] pl-[21px] box-border gap-[32px] tracking-[normal] text-left text-7xl text-black font-inter mq725:gap-[32px]">
      <h1 className="m-0 w-[1101px] relative text-inherit capitalize font-medium font-inherit inline-block max-w-full mq450:text-2xl">
        My Projects
      </h1>
      <section className="self-stretch h-[516px] flex flex-col items-start justify-start gap-[23px] max-w-full">
        <header className="self-stretch h-8 flex flex-row items-center justify-between gap-[20px] max-w-full text-right text-smi text-darkslategray-100 font-inter">
          
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div
              className="relative capitalize font-medium whitespace-nowrap cursor-pointer hover:[text-decoration:underline]"
              onClick={() => handleOptionClick("createProject")}
            >
              +Create new Project
            </div>
          </div>
        </header>
        <div className="self-stretch flex-1 relative">
          <MyProjectsDatagrid data = {data} />
        </div>
      </section>
    </div>
  );
};

export default MyProjects;