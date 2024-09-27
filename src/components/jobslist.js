import React from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";
import '../styles.css';

const JobsList = ({ locale }) => {
  const offers = [
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4500,
      city: "Bogotá, Colombia",
      date: "2019-03-25",
      views: 1250
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20000,
      city: "Palo Alto, CA, USA",
      date: "2019-03-26",
      views: 22500
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1000,
      city: "Cali, Colombia",
      date: "2019-03-27",
      views: 300
    }
  ];

  const headerClass = locale === "es-ES" ? "thead-light" : "thead-dark";

  console.log("Offers: ", offers);

  return (
  <div>
    <table className="table">
      <thead className={headerClass}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            <FormattedMessage id="job.position" defaultMessage="Position" />
          </th>
          <th scope="col">
            <FormattedMessage id="job.company" defaultMessage="Company" />
          </th>
          <th scope="col">
            <FormattedMessage id="job.salary" defaultMessage="Salary" />
          </th>
          <th scope="col">
            <FormattedMessage id="job.city" defaultMessage="City" />
          </th>
          <th scope="col">
            <FormattedMessage id="job.date" defaultMessage="Publication Date" />
          </th>
          <th scope="col">
            <FormattedMessage id="job.views" defaultMessage="Views" />
          </th>
        </tr>
      </thead>
      <tbody>
        {offers.map((e, i) => (
          <Job key={i} offer={e} />
        ))}
      </tbody>
    </table>
  </div>
);
};

export default JobsList;