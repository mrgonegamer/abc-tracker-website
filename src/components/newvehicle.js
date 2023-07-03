import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { Car } from "../models";
import "./newvehicle.css";

const NewVehicle = () => {
  const history = useHistory();
  const [vin, setVin] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [mileage, setMileage] = useState("");
  const [dateBought, setDateBought] = useState("");
  const [dateReceived, setDateReceived] = useState("");
  const [dateSold, setDateSold] = useState("");
  const [oilChange, setOilChange] = useState(false);
  const [carWashDate, setCarWashDate] = useState("");
  const [arbitration, setArbitration] = useState(false);
  const [visualInspectionDate, setVisualInspectionDate] = useState("");
  const [fluidsCheckedDate, setFluidsCheckedDate] = useState("");
  const [testDriveDate, setTestDriveDate] = useState("");
  const [buyersGuide, setBuyersGuide] = useState(false);
  const [frazer, setFrazer] = useState(false);
  const [pictures, setPictures] = useState(false);
  // const [partsNeeded, setPartsNeeded] = useState("");
  // const [partsOnOrder, setPartsOnOrder] = useState("");
  // const [partsReceived, setPartsReceived] = useState("");
  // const [partsInstalled, setPartsInstalled] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Validate required fields
      if (!vin) {
        console.error("Please fill in the Vin.");
        return;
      }
  
      // Create the car object
      const car = new Car({
        vin,
        make,
        model,
        year: parseInt(year, 10),
        color,
        mileage: mileage ? parseInt(mileage, 10) : null,
        dateBought: dateBought ? new Date(dateBought).toISOString() : null,
        dateReceived: dateReceived ? new Date(dateReceived).toISOString() : null,
        dateSold: dateSold ? new Date(dateSold).toISOString() : null,
        oilChange,
        carWashDate: carWashDate ? new Date(carWashDate).toISOString() : null,
        arbitration,
        visualInspectionDate: visualInspectionDate ? new Date(visualInspectionDate).toISOString() : null,
        fluidsCheckedDate: fluidsCheckedDate ? new Date(fluidsCheckedDate).toISOString() : null,
        testDriveDate: testDriveDate ? new Date(testDriveDate).toISOString() : null,
        buyersGuide,
        frazer,
        pictures,
        // partsNeeded,
        // partsOnOrder,
        // partsReceived,
        // partsInstalled,
      });
  
      // Save the car object to the "Car" table
      await DataStore.save(car);
  
      // Reset form fields
      setVin("");
      setMake("");
      setModel("");
      setYear("");
      setColor("");
      setMileage("");
      setDateBought("");
      setDateReceived("");
      setDateSold("");
      setOilChange(false);
      setCarWashDate("");
      setArbitration(false);
      setVisualInspectionDate("");
      setFluidsCheckedDate("");
      setTestDriveDate("");
      setBuyersGuide(false);
      setFrazer(false);
      setPictures(false);
      // setPartsNeeded("");
      // setPartsOnOrder("");
      // setPartsReceived("");
      // setPartsInstalled("");
  
      // Redirect to the homepage
      history.push("/homepage");
    } catch (error) {
      // Handle error case
      console.error("Error saving vehicle data:", error);
    }
  };
  
  //setMake(e.target.value)
  return (
    <div className="new-vehicle">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="vin">VIN Number:</label>
        <input type="text" id="vin" value={vin} onChange={(e) => setVin(e.target.value)} />

        <label htmlFor="make">Make:</label>
        <input type="text" id="make" value={make} onChange={(e) => setMake(e.target.value)} />

        <label htmlFor="model">Model:</label>
        <input type="text" id="model" value={model} onChange={(e) => setModel(e.target.value)} />

        <label htmlFor="year">Year:</label>
        <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />

        <label htmlFor="color">Color:</label>
        <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} />

        <label htmlFor="mileage">Mileage:</label>
        <input type="text" id="mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} />

        <label htmlFor="dateBought">Date Bought:</label>
        <input type="date" id="dateBought" value={dateBought} onChange={(e) => setDateBought(e.target.value)} />

        <label htmlFor="dateReceived">Date Received:</label>
        <input type="date" id="dateReceived" value={dateReceived} onChange={(e) => setDateReceived(e.target.value)} />

        <label htmlFor="dateSold">Date Sold:</label>
        <input type="date" id="dateSold" value={dateSold} onChange={(e) => setDateSold(e.target.value)} />

        <label htmlFor="oilChange">Oil Change:</label>
        <input type="checkbox" id="oilChange" value={oilChange} onChange={(e) => setOilChange(e.target.checked)} />

        <label htmlFor="carWashDate">Car Wash Date:</label>
        <input type="date" id="carWashDate" value={carWashDate} onChange={(e) => setCarWashDate(e.target.value)} />

        <label htmlFor="arbitration">Arbitration:</label>
        <input type="checkbox" id="arbitration" value={arbitration} onChange={(e) => setArbitration(e.target.checked)} />

        <label htmlFor="visualInspectionDate">Visual Inspection Date:</label>
        <input type="date" id="visualInspectionDate" value={visualInspectionDate} onChange={(e) => setVisualInspectionDate(e.target.value)} />

        <label htmlFor="fluidsCheckedDate">Fluids Checked Date:</label>
        <input type="date" id="fluidsCheckedDate" value={fluidsCheckedDate} onChange={(e) => setFluidsCheckedDate(e.target.value)} />

        <label htmlFor="testDriveDate">Test Drive Date:</label>
        <input type="date" id="testDriveDate" value={testDriveDate} onChange={(e) => setTestDriveDate(e.target.value)} />

        <label htmlFor="buyersGuide">Buyers Guide:</label>
        <input type="checkbox" id="buyersGuide" value={buyersGuide} onChange={(e) => setBuyersGuide(e.target.checked)} />

        <label htmlFor="frazer">Frazer:</label>
        <input type="checkbox" id="frazer" value={frazer} onChange={(e) => setFrazer(e.target.checked)} />

        <label htmlFor="pictures">Pictures:</label>
        <input type="checkbox" id="pictures" value={pictures} onChange={(e) => setPictures(e.target.checked)} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NewVehicle;
