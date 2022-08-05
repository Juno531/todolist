import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ListAdd() {
  const [startDate, setDate] = useState(new Date());

  return (
    <div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setDate(date)}
        />
      </div>
    </div>
  );
}

export default ListAdd;
