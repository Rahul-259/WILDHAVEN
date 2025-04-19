import React, { useState } from "react";
import { useDonation } from "./DonateContext";
import "../DonationModal.css";

function HeaderModal({ isOpen, onClose, donatingTo = "general" }) {
  const [amount, setAmount] = useState(50); // Default donation amount
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [animalCategory, setAnimalCategory] = useState(""); // Animal category state

  const { addDonation } = useDonation();

  // Map from animal categories to animal types in the donation data
  const categoryToAnimal = {
    "Big Cats (Lions, Tigers)": "tiger",
    "Marine Life (Dolphins, Whales)": "dolphin",
    "Primates (Gorillas, Orangutans)": "gorilla",
    "Birds (Eagles, Parrots)": "bird",
    "Reptiles (Turtles, Snakes)": "turtle",
    "Endangered Species": "rhino", // Assume rhino for endangered species
    "Domestic Animals (Cats, Dogs)": "dog",
    "Farm Animals (Rescue)": "farm",
    "Wildlife Rehabilitation": "koala", // Assume koala for wildlife rehab
  };

  // List of animal categories
  const animalCategories = [
    "Big Cats (Lions, Tigers)",
    "Marine Life (Dolphins, Whales)",
    "Primates (Gorillas, Orangutans)",
    "Birds (Eagles, Parrots)",
    "Reptiles (Turtles, Snakes)",
    "Endangered Species",
    "Domestic Animals (Cats, Dogs)",
    "Farm Animals (Rescue)",
    "Wildlife Rehabilitation",
  ];

  if (!isOpen) {
    return null;
  }

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setAmount(Number(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Figure out which animal to assign the donation to
    const animalToUpdate = categoryToAnimal[animalCategory] || "elephant";

    // Add donation to context
    addDonation(animalToUpdate, amount);

    console.log(
      `Donation Submitted: Amount: $${amount}, Name: ${name}, Email: ${email}, Animal Category: ${animalCategory}`
    );

    alert(
      `Thank you for your $${amount} donation to support ${animalCategory}, ${name}!`
    );

    onClose();

    // Reset form fields
    setAmount(50);
    setCustomAmount("");
    setName("");
    setEmail("");
    setAnimalCategory("");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <h2 className="h3 modal-title">Make a Donation To Wildlife</h2>
        <p className="modal-subtitle">Your contribution saves animal lives!</p>
        <form onSubmit={handleSubmit}>
          <div className="amount-selection">
            <p>Select Amount:</p>
            <div className="amount-buttons">
              {[10, 25, 50, 100].map((value) => (
                <button
                  type="button"
                  key={value}
                  className={`amount-btn ${
                    amount === value && !customAmount ? "active" : ""
                  }`}
                  onClick={() => handleAmountClick(value)}
                >
                  ${value}
                </button>
              ))}
              <input
                type="text"
                pattern="\d*"
                inputMode="numeric"
                placeholder="Custom"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className={`amount-input ${customAmount ? "active" : ""}`}
              />
            </div>
          </div>

          {/* Animal category dropdown */}
          <div className="animal-selection">
            <p>Select Animal Category to Support:</p>
            <select
              value={animalCategory}
              onChange={(e) => setAnimalCategory(e.target.value)}
              required
              className="modal-input"
            >
              <option value="">-- Select a Category --</option>
              {animalCategories.map((animal, index) => (
                <option key={index} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </div>

          <div className="donor-info">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="modal-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="modal-input"
            />
          </div>

          <button type="submit" className="btn btn-primary modal-submit-btn">
            <span>
              Donate ${amount || 0} to {animalCategory || "Animals"}
            </span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeaderModal;
