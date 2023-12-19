import React from "react";

const BookingWidget = ({ experience }) => {
  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">€{experience.price} per person</div>
      <div className="border rounded-2xl mt-4 flex items-center justify-center">
        <div className="flex">
          <div className="my-1 py-2 px-2 border-l">
            <label>Pick a date for your experience: </label>
          </div>
          <div className="my-1 py-2 px-2">
            <input type="date" />
          </div>
        </div>
        <div>
          <div className="my-1 py-2 px-2 border-t">
            <label>Group Size</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <button className="primary mt-4">Experience this</button>
    </div>
  );
};

export default BookingWidget;
