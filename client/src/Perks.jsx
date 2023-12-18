import React from "react";

const Perks = ({ selected, onChange }) => {
  return (
    <>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Air-Conditioned Vehicle</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>All Fees and Taxes</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Lunch</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Guided Tour</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Entrance Fees</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Private Transport</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Local Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Professional Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>E-Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Food and Drinks</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <span>Personal Expenses and Insurance</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Tasting</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Wheelchair Accessible</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Suitable for Kids</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Animals Allowed</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Service Animals Allowed</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Parking Fees</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" /> <span>Equipment</span>
      </label>
    </>
  );
};

export default Perks;
