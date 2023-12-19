import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const BookingWidget = ({ experience }) => {
  const [date, setDate] = useState("");
  const [groupSize, setGroupSize] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [redirect, setRedirect] = useState("");
  const [error, setError] = useState("");

  async function bookExperience() {
    if (date === "" || groupSize <= 0 || name === "" || mobile === "") {
      setError("Please fill in all required fields.");
      return error;
    }
    const { data } = await axios.post("/booking", {
      experience: experience._id,
      date,
      groupSize,
      name,
      mobile,
    });
    const bookingId = data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">€{experience.price} per person</div>
      <div className="border rounded-2xl mt-4 flex items-center justify-center p-3">
        <div className="flex">
          <div className="my-1 py-2 px-2 border-r">
            <label>Pick a date for your experience: </label>
          </div>
          <div className="my-1 py-2 px-2">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="my-1 py-2 px-2">
        <label>Group Size</label>
        <input
          type="number"
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
          required
        />
      </div>
      <div className="my-1 py-2 px-3">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="my-1 py-2 px-2">
        <label>Phone number</label>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <button className="primary mt-4" onClick={bookExperience}>
        Experience this
      </button>
    </div>
  );
};

export default BookingWidget;
