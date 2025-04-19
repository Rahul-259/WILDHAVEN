import React, { createContext, useState, useContext } from "react";

// Initial fundraising data for each animal
const initialDonationData = {
  elephant: {
    raised: 256,
    goal: 34562,
    toGo: 864,
  },
  rhino: {
    raised: 256,
    goal: 34562,
    toGo: 864,
  },
  tiger: {
    raised: 256,
    goal: 34562,
    toGo: 864,
  },
  koala: {
    raised: 256,
    goal: 34562,
    toGo: 864,
  },
};

// Create context
const DonationContext = createContext();

// Provider component
export const DonationProvider = ({ children }) => {
  const [donationData, setDonationData] = useState(initialDonationData);

  // Function to add a donation to a specific animal
  const addDonation = (animal, amount) => {
    setDonationData((prevData) => {
      const currentAnimal = prevData[animal];

      if (!currentAnimal) return prevData; // Animal not found

      // Calculate new values
      const newRaised = currentAnimal.raised + amount;
      const newToGo = Math.max(0, currentAnimal.goal - newRaised);

      // Update the specific animal's data
      return {
        ...prevData,
        [animal]: {
          ...currentAnimal,
          raised: newRaised,
          toGo: newToGo,
        },
      };
    });
  };

  // Calculate percentage of goal reached
  const getPercentage = (animal) => {
    const data = donationData[animal];
    if (!data) return 0;
    return Math.min(100, Math.round((data.raised / data.goal) * 100));
  };

  return (
    <DonationContext.Provider
      value={{ donationData, addDonation, getPercentage }}
    >
      {children}
    </DonationContext.Provider>
  );
};

// Custom hook to use the donation context
export const useDonation = () => useContext(DonationContext);
