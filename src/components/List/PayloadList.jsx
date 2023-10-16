import React from "react";
import PayloadCard from "../Card/PayloadCard";

function PayloadList({ payloads }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {payloads.map((item) => (
        <PayloadCard key={item.id} payload={item} />
      ))}
    </div>
  );
}

export default PayloadList;
