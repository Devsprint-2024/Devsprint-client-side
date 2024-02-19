import * as React from 'react';
import {Box, Button} from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";


const handleButtonClick = (filename) => {
  {
    localStorage.setItem('selectedFrame','codeEditor');
    localStorage.setItem('filename',filename);
    window.location.reload();
  }
}

const columns = [
  { field: 'id', headerName: '', width: 90 },
  {
    field: 'Filename',
    headerName: 'File Name',
    width: 800,
    editable: false,
  },
  {
    field: 'openCodeButton',
    headerName: '',
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <Button variant = "contained" color="primary"
      onClick={() => handleButtonClick(params.row.Filename)} >
        Edit Code
      </Button>
    )
  },
];


const rows = [
  { id: 1, Filename: 'src' },
  { id: 2, Filename: 'server'},
]

export default function MyProjectsDatagrid(data) {
  return (
    <Box sx={{ height: 400, width: 1200 }}>
      <DataGrid
        rows={rows}
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