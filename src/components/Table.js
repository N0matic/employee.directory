import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Employee ID', field: 'id', type: 'numeric' },
      { title: 'First Name', field: 'firstName' },
      { title: 'Last Name', field: 'lastName' },
      { title: 'Department', field: 'department' },
      { title: 'Role', field: 'role' },
      { title: 'Salary', field: 'salary' }
    ],
    data: [
      { id: 1, firstName: 'Dan', lastName: 'Anderson', department: "Executive", role: "Chief Executive Officer", salary: "500,000" },
      { id: 2, firstName: 'Marla', lastName: 'Johnson', department: "Executive", role: "Chief Financial Officer", salary: "350,000" },
      { id: 3, firstName: 'John', lastName: 'Markson', department: "Finance", role: "Senior Financial Analyst", salary: "150,000" },
      { id: 4, firstName: 'Angela', lastName: 'Scott', department: "Marketing", role: "Marketing Associate", salary: "100,000" },
      { id: 5, firstName: 'Mark', lastName: 'Fox', department: "IT", role: "Senior Developer", salary: "200,000" },
      { id: 6, firstName: 'Jennifer', lastName: 'Smith', department: "Sales", role: "Sales Director", salary: "225,000" },
      { id: 7, firstName: 'Matt', lastName: 'Ortega', department: "Sales", role: "Sales Associate", salary: "120,000" },
      { id: 8, firstName: 'Rachel', lastName: 'Lopez', department: "IT", role: "Junior Developer", salary: "120,000" },
      { id: 9, firstName: 'Joe', lastName: 'Jackson', department: "Marketing", role: "Marketing Director", salary: "200,000" },
      { id: 10, firstName: 'Grace', lastName: 'Nolio', department: "Marketing", role: "Senior Marketing Associate", salary: "140,000" },
      { id: 11, firstName: 'Liam', lastName: 'Potter', department: "Finance", role: "Financial Analyst", salary: "120,000" },
      { id: 12, firstName: 'Charlene', lastName: 'Weathers', department: "IT", role: "Junior Developer", salary: "100,000" },
      { id: 13, firstName: 'Rob', lastName: 'Atherton', department: "Finance", role: "Finance Assistant", salary: "75,000" },
      { id: 14, firstName: 'Molly', lastName: 'Ocean', department: "Marketing", role: "Marketing Assistant", salary: "75,000" },
      { id: 15, firstName: 'Max', lastName: 'Kyle', department: "Sales", role: "Sales Associate", salary: "130,000" }
    ]
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}