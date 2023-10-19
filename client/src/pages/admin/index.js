import React from 'react'
import { Admin, Resource,ListGuesser } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

const dataProvider = restProvider('http://localhost:3500/api/user');

function AdminPage() {
  return (
      <Admin dataProvider={dataProvider}>
        <Resource name="user" list={ListGuesser} />
      </Admin>
    );
  }
export default AdminPage;