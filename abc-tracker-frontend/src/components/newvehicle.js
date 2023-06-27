import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./newvehicle.css";

const NewVehicle = () => {
  const history = useHistory();
  const [vin, setVin] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [milage, setMilage] = useState("");
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
  const [partsNeeded, setPartsNeeded] = useState("");
  const [partsOnOrder, setPartsOnOrder] = useState("");
  const [partsReceived, setPartsReceived] = useState("");
  const [partsInstalled, setPartsInstalled] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      vin,
      make: capitalizeFirstLetter(make),
      model: capitalizeFirstLetter(model),
      year,
      color: capitalizeFirstLetter(color),
      milage,
      dateBought,
      dateReceived: dateReceived || "",
      dateSold: dateSold || "",
      oilChange,
      carWashDate: carWashDate || "",
      arbitration,
      visualInspectionDate: visualInspectionDate || "",
      fluidsCheckedDate: fluidsCheckedDate || "",
      testDriveDate: testDriveDate || "",
      buyersGuide,
      frazer,
      pictures,
      partsNeeded,
      partsOnOrder,
      partsReceived,
      partsInstalled,
    };



    try {
      const response = await axios.post("http://localhost:5000/save-data", formData);

      if (response.status === 200) {
        // Data successfully saved
        console.log("Vehicle data saved.");

        // Reset form fields
        setVin("");
        setMake("");
        setModel("");
        setYear("");
        setColor("");
        setMilage("");
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
        setPartsNeeded("");
        setPartsOnOrder("");
        setPartsReceived("");
        setPartsInstalled("");

        // Redirect to the homepage
        window.location.href = "/homepage";
      } else {
        // Handle error case
        console.log("Failed to save vehicle data.");
      }
    } catch (error) {
      // Handle error case
      console.error("Error saving vehicle data:", error);
    }
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

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

        <label htmlFor="milage">Milage:</label>
        <input type="text" id="milage" value={milage} onChange={(e) => setMilage(e.target.value)} />

        <label htmlFor="dateBought">Date Bought:</label>
        <input type="date" id="dateBought" value={dateBought} onChange={(e) => setDateBought(e.target.value)} />

        <label htmlFor="dateReceived">Date Received:</label>
        <input type="date" id="dateReceived" value={dateReceived} onChange={(e) => setDateReceived(e.target.value)} />

        <label htmlFor="dateSold">Date Sold:</label>
        <input type="date" id="dateSold" value={dateSold} onChange={(e) => setDateSold(e.target.value)} />

        <label htmlFor="oilChange">Oil Change:</label>
        <input type="checkbox" id="oilChange" checked={oilChange} onChange={(e) => setOilChange(e.target.checked)} />

        <label htmlFor="carWashDate">Car Wash Date:</label>
        <input type="date" id="carWashDate" value={carWashDate} onChange={(e) => setCarWashDate(e.target.value)} />

        <label htmlFor="arbitration">Arbitration:</label>
        <input type="checkbox" id="arbitration" checked={arbitration} onChange={(e) => setArbitration(e.target.checked)} />

        <label htmlFor="visualInspectionDate">Visual Inspection Date:</label>
        <input
          type="date"
          id="visualInspectionDate"
          value={visualInspectionDate}
          onChange={(e) => setVisualInspectionDate(e.target.value)}
        />

        <label htmlFor="fluidsCheckedDate">Fluids Checked Date:</label>
        <input
          type="date"
          id="fluidsCheckedDate"
          value={fluidsCheckedDate}
          onChange={(e) => setFluidsCheckedDate(e.target.value)}
        />

        <label htmlFor="testDriveDate">Test Drive Date:</label>
        <input
          type="date"
          id="testDriveDate"
          value={testDriveDate}
          onChange={(e) => setTestDriveDate(e.target.value)}
        />

        <label htmlFor="buyersGuide">Buyer's Guide:</label>
        <input type="checkbox" id="buyersGuide" checked={buyersGuide} onChange={(e) => setBuyersGuide(e.target.checked)} />

        <label htmlFor="frazer">Frazer:</label>
        <input type="checkbox" id="frazer" checked={frazer} onChange={(e) => setFrazer(e.target.checked)} />

        <label htmlFor="pictures">Pictures:</label>
        <input type="checkbox" id="pictures" checked={pictures} onChange={(e) => setPictures(e.target.checked)} />

        <label htmlFor="partsNeeded">Parts Needed:</label>
        <input type="text" id="partsNeeded" value={partsNeeded} onChange={(e) => setPartsNeeded(e.target.value)} />

        <label htmlFor="partsOnOrder">Parts on Order:</label>
        <input type="text" id="partsOnOrder" value={partsOnOrder} onChange={(e) => setPartsOnOrder(e.target.value)} />

        <label htmlFor="partsReceived">Parts Received:</label>
        <input type="text" id="partsReceived" value={partsReceived} onChange={(e) => setPartsReceived(e.target.value)} />

        <label htmlFor="partsInstalled">Parts Installed:</label>
        <input type="text" id="partsInstalled" value={partsInstalled} onChange={(e) => setPartsInstalled(e.target.value)} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NewVehicle;
