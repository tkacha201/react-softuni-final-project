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
          checked={selected.includes("airConditioned")}
          name="airConditioned"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Air-Conditioned Vehicle</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("feesAndTaxes")}
          name="feesAndTaxes"
          onChange={handleCheckboxClick}
        />{" "}
        <span>All Fees and Taxes</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("lunch")}
          name="lunch"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Lunch</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("guidedTour")}
          name="guidedTour"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Guided Tour</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("entranceFees")}
          name="entranceFees"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Entrance Fees</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("privateTransport")}
          name="privateTransport"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Private Transport</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("localGuide")}
          name="localGuide"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Local Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("professionalGuide")}
          name="professionalGuide"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Professional Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("eGuide")}
          name="eGuide"
          onChange={handleCheckboxClick}
        />{" "}
        <span>E-Guide</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("foodAndDrinks")}
          name="foodAndDrinks"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Food and Drinks</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("personalExpenses")}
          name="personalExpenses"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Personal Expenses and Insurance</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("tasting")}
          name="tasting"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Tasting</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("wheelchairAccessible")}
          name="wheelchairAccessible"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Wheelchair Accessible</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("suitableForKids")}
          name="suitableForKids"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Suitable for Kids</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("animalsAllowed")}
          name="animalsAllowed"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Animals Allowed</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("serviceAnimalsAllowed")}
          name="serviceAnimalsAllowed"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Service Animals Allowed</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("parkingFees")}
          name="parkingFees"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Parking Fees</span>
      </label>
      <label className="border p-4 flex-rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("equipment")}
          name="equipment"
          onChange={handleCheckboxClick}
        />{" "}
        <span>Equipment</span>
      </label>
    </>
  );
};

export default Perks;
