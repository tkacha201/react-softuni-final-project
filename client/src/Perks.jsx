import React from "react";

const Perks = ({ selected, onChange }) => {
  function handleCheckboxClick(e) {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name], checked);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="airConditioned"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Air-Conditioned Vehicle</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="feesAndTaxes"
          onChange={handleCheckboxClick}
        />{" "}
        <span>All Fees and Taxes</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="lunch" onChange={handleCheckboxClick} />{" "}
        <span>Lunch</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="guidedTour"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Guided Tour</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="entranceFees"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Entrance Fees</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="privateTransport"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Private Transport</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="localGuide"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Local Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="professionalGuide"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Professional Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="eGuide" onChange={handleCheckboxClick} />{" "}
        <span>E-Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="foodAndDrinks"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Food and Drinks</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="personalExpenses"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Personal Expenses and Insurance</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="tasting" onChange={handleCheckboxClick} />{" "}
        <span>Tasting</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="wheelchairAccessible"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Wheelchair Accessible</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="suitableForKids"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Suitable for Kids</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="animalsAllowed"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Animals Allowed</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="serviceAnimalsAllowed"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Service Animals Allowed</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="parkingFees"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Parking Fees</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          name="equipment"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Equipment</span>
      </label>
    </>
  );
};

export default Perks;
