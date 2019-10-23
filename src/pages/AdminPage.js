import React from 'react'
import Nav from "../components/Nav";
import Dashboard from '../components/Dashboard';
import Header from "../components/Header"
import Footer from "../components/Footer"

const AdminPage = () => {
    return (
        <div>
            <Nav ViewJobs="All Jobs" AddJobs ="Add Jobs"  />
            <Header className="adminHeader" headerText="signHeaderText" HeaderText__first= "Admin" SubHeaderText="Job offers available"   />
            <Dashboard />
            <Footer/>

        </div>
    )
}

export default AdminPage;
