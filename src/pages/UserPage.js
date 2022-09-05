import React from "react";
import SidebarNav from "../components/SidebarNav";
import JobCard from "../components/JobCard";
import "./user-page.scss";

export default function ProfessionalPage() {
  return (
    <div className="professional-page">
      <SidebarNav></SidebarNav>

      <div>
        <h2 className="headline-4">Your applications</h2>
        <form></form>
        <div>
          <h3 className="headline-6">4 applications found</h3>
          <div>{/* <JobCard></JobCard> */}</div>
        </div>
      </div>

      {/* FIND THAT JOB 
      <div>
        <h2 className="headline-4">Find that job</h2>
        <form></form>
        <div>
          <h3 className="headline-6">12 jobs for you</h3>
          <div>
            <JobCard></JobCard>
          </div>
        </div>
      </div>*/}
    </div>
  );
}
