import * as React from 'react';
import {Box, Button} from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";


const handleButtonClick = (name) => {
  
    localStorage.setItem('selectedFrame','singleProjectFile');
    localStorage.setItem('projectName',name);
    window.location.reload();
}

const columns = [
  { field: 'id', headerName: '', width: 90 },
  {
    field: 'Project',
    headerName: 'Project',
    width: 150,
    editable: false,
  },
  {
    field: 'Disclipline',
    headerName: 'Disclipline',
    width: 150,
    editable: false,
  },
  {
    field: 'Description',
    headerName: 'Description',
    type: 'text',
    width: 200,
    editable: false,
  },
  {
    field: 'viewDetailsButton',
    headerName: '',
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <Button variant = "contained" color="primary"
      onClick={() => handleButtonClick(params.row.Project)} >
        View Details
      </Button>
    )
  },
];




export default function MyProjectsDatagrid({data}) {
  const dataArray = Object.keys(data).map(key => data[key]);
  return (
    <Box sx={{ height: 400, width: 1200 }}>
      <DataGrid
         rows={ Array.isArray(dataArray)? dataArray.map((item, index) => ({
          id: index + 1,
          Project: item.Name, 
          Discipline: 'Engineering',
          Description: item.Description
        })): []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}