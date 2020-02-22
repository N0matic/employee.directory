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
      { id: 1, firstName: 'Mr', lastName: 'Crabbs', department: "Executive", role: "Chief Executive Officer", salary: "500,000" },
      { id: 2, firstName: 'Captain', lastName: 'Planet', department: "Executive", role: "Chief Financial Officer", salary: "350,000" },
      { id: 3, firstName: 'Bugs', lastName: 'Bunny', department: "Finance", role: "Senior Financial Analyst", salary: "150,000" },
      { id: 4, firstName: 'Finn', lastName: 'The Human', department: "Marketing", role: "Marketing Associate", salary: "100,000" },
      { id: 5, firstName: 'Dexter', lastName: 'The Boy Genius', department: "IT", role: "Senior Developer", salary: "200,000" },
      { id: 6, firstName: 'Squid', lastName: 'Worth', department: "Sales", role: "Sales Director", salary: "35,000" },
      { id: 7, firstName: 'Sponge', lastName: 'Bob', department: "Sales", role: "Sales Associate", salary: "30,000" },
      { id: 8, firstName: 'Doug', lastName: 'Finnie', department: "IT", role: "Junior Developer", salary: "20,000" },
      { id: 9, firstName: 'Johnny', lastName: 'Bravo', department: "Marketing", role: "Marketing Director", salary: "60,000" },
      { id: 10, firstName: 'Tommy', lastName: 'Pickles', department: "Marketing", role: "Senior Marketing Associate", salary: "40,000" },
      { id: 11, firstName: 'Karen', lastName: 'From Accounting', department: "Finance", role: "Financial Analyst", salary: "60,000" },
      { id: 12, firstName: 'Jake', lastName: 'The Dog', department: "IT", role: "Junior Developer", salary: "100,000" },
      { id: 13, firstName: 'BMO', lastName: 'The Robot', department: "Finance", role: "Finance Assistant", salary: "75,000" },
      { id: 14, firstName: 'Ickis', lastName: 'Monster', department: "Marketing", role: "Marketing Assistant", salary: "75,000" },
      { id: 15, firstName: 'Courage', lastName: 'A Cowardly Dog', department: "Sales", role: "Sales Associate", salary: "25,000" }
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