import React from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";

const Job = ({ offer }) => {
  const salaryInMillions = offer.salary / 1000000;

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>
        <FormattedNumber
          value={salaryInMillions}
          maximumFractionDigits={2}
        />{" "}
        <FormattedMessage
          id={salaryInMillions > 1 ? "salary.millions" : "salary.million"}
          defaultMessage="million"
        /> US$
      </td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={offer.views} />
      </td>
    </tr>
  );
};

export default Job;