"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const personas = [
  { id: 1, name: "Adult Man", description: "(Dad, Grandpa, Uncle, Husband)" },
  { id: 2, name: "Adult Woman", description: "(Mom, Grandma, Aun, Wife)" },
  { id: 3, name: "Boy", description: "(Son, Grandson, Nephew)" },
  { id: 4, name: "Girl", description: "(Daughter, Granddaughter, Niece)" },
  { id: 5, name: "Baby", description: "Awwww" },
];

const giftBoxOptionsByPersona = {
  "Adult Man": {
    topper: [{ name: "Ornament", price: 0 }],
    mysteryGift: [{ name: "Engraved Pocket Knife", price: 0 }],
    selfCare: [
      { name: "Artisan Barber Big Mousse", price: 9, thirdItemPrice: 30 },
      { name: "Artisan Barber Shave Cream", price: 0, thirdItemPrice: 21 },
      { name: "Artisan Barber Shave Tonic", price: 0, thirdItemPrice: 21 },
      { name: "Artisan Barber Volume Hero", price: 4, thirdItemPrice: 25 },
      { name: "Artisan Barber Groom Guru", price: 4, thirdItemPrice: 25 },
      { name: "First Hand All Purpose Pomade", price: 0, thirdItemPrice: 25 },
      { name: "First Hand Texturizing Paste", price: 0, thirdItemPrice: 25 },
      { name: "First Hand Clay Pomade", price: 0, thirdItemPrice: 25 },
    ],
    textiles: [{ name: "None", price: 0 }],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
  "Adult Woman": {
    topper: [{ name: "Brooch", price: 0 }],
    mysteryGift: [
      { name: "SS Chain", price: 0 },
      { name: "SS Earings (S, M L)", price: 0 },
    ],
    selfCare: [
      { name: "Artisan Barber Big Mousse", price: 4, thirdItemPrice: 30 },
      { name: "Artisan Barber Volume Hero", price: 0, thirdItemPrice: 25 },
      { name: "Artisan Barber Groom Guru", price: 0, thirdItemPrice: 25 },
    ],
    textiles: [{ name: "None", price: 0 }],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
  Boy: {
    topper: [{ name: "Figurine", price: 0 }],
    mysteryGift: [{ name: "Shark Tooth Necklace", price: 0 }],
    selfCare: [
      { name: "Artisan Barber Big Mousse", price: 4, thirdItemPrice: 30 },
      { name: "Artisan Barber Volume Hero", price: 0, thirdItemPrice: 25 },
      { name: "Artisan Barber Groom Guru", price: 0, thirdItemPrice: 25 },
      { name: "First Hand All Purpose Pomade", price: 0, thirdItemPrice: 25 },
      { name: "First Hand Clay Pomade", price: 0, thirdItemPrice: 25 },
      { name: "First Hand Texturizing Paste", price: 0, thirdItemPrice: 25 },
    ],
    textiles: [{ name: "Comb", price: 0 }],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
  Girl: {
    topper: [{ name: "Charm", price: 0 }],
    mysteryGift: [
      { name: "SS Chain", price: 0 },
      { name: "SS Earings (S, M L)", price: 0 },
    ],
    selfCare: [
      { name: "Artisan Barber Big Mousse", price: 0, thirdItemPrice: 30 },
      { name: "Artisan Barber Volume Hero", price: 0, thirdItemPrice: 25 },
      { name: "Artisan Barber Groom Guru", price: 0, thirdItemPrice: 25 },
    ],
    textiles: [{ name: "Socks", price: 0 }],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
  Baby: {
    topper: [{ name: "Plush", price: 0 }],
    mysteryGift: [{ name: "[BLANK]", price: 0 }],
    selfCare: [{ name: "None", price: 0 }],
    textiles: [{ name: "Servilletas", price: 0 }],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
};

const GiftBoxOrderForm = () => {
  const [showPersonaModal, setShowPersonaModal] = useState(true);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [topperSelection, setTopperSelection] = useState(null);
  const [mysteryGiftSelection, setMysteryGiftSelection] = useState(null);
  const [selfCareSelections, setSelfCareSelections] = useState([]);
  const [thirdSelfCareSelection, setThirdSelfCareSelection] = useState(null);
  const [textilesSelection, setTextilesSelection] = useState(null);
  const [customizationSelection, setCustomizationSelection] = useState(null);
  const [totalPrice, setTotalPrice] = useState(113);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handlePersonaSelect = (persona) => {
    setSelectedPersona(persona);
    setShowPersonaModal(false);
    // Reset selections when changing persona
    setTopperSelection(null);
    setMysteryGiftSelection(null);
    setSelfCareSelections([]);
    setThirdSelfCareSelection(null);
    setTextilesSelection(null);
    setCustomizationSelection(null);
    setTotalPrice(113);
  };

  const handleSelection = (category, item) => {
    switch (category) {
      case "topper":
        setTopperSelection(item);
        break;
      case "mysteryGift":
        setMysteryGiftSelection(item);
        break;
      case "selfCare":
        // Handle multiple selections (max 2)
        if (
          selfCareSelections.find((selection) => selection.name === item.name)
        ) {
          // Remove if already selected
          setSelfCareSelections(
            selfCareSelections.filter(
              (selection) => selection.name !== item.name
            )
          );
        } else if (selfCareSelections.length < 2) {
          // Add if less than 2 selections
          setSelfCareSelections([...selfCareSelections, item]);
        }
        break;
      case "thirdSelfCare":
        setThirdSelfCareSelection(item);
        break;
      case "textiles":
        setTextilesSelection(item);
        break;
      case "customization":
        setCustomizationSelection(item);
        break;
    }

    // Calculate the new price directly using the new selection
    let newPrice = 113; // Base starting price
    const newSelection = {
      topper: category === "topper" ? item : topperSelection,
      mysteryGift: category === "mysteryGift" ? item : mysteryGiftSelection,
      selfCare:
        category === "selfCare"
          ? item.name === selfCareSelections[0]?.name
            ? [selfCareSelections[1]]
            : item.name === selfCareSelections[1]?.name
            ? [selfCareSelections[0]]
            : [...selfCareSelections, item].slice(0, 2)
          : selfCareSelections,
      thirdSelfCare:
        category === "thirdSelfCare" ? item : thirdSelfCareSelection,
      textiles: category === "textiles" ? item : textilesSelection,
      customization:
        category === "customization" ? item : customizationSelection,
    };

    if (newSelection.topper) newPrice += newSelection.topper.price;
    if (newSelection.mysteryGift) newPrice += newSelection.mysteryGift.price;
    newSelection.selfCare.forEach((item) => {
      if (item) newPrice += item.price;
    });
    if (newSelection.thirdSelfCare) {
      newPrice += newSelection.thirdSelfCare.thirdItemPrice;
    }
    if (newSelection.textiles) newPrice += newSelection.textiles.price;
    if (newSelection.customization)
      newPrice += newSelection.customization.price;

    setTotalPrice(newPrice);
  };

  const handleClear = () => {
    setShowPersonaModal(true);
    setSelectedPersona(null);
    setTopperSelection(null);
    setMysteryGiftSelection(null);
    setSelfCareSelections([]);
    setThirdSelfCareSelection(null);
    setTextilesSelection(null);
    setCustomizationSelection(null);
    setTotalPrice(113);
    setContactInfo({
      name: '',
      email: '',
      phone: ''
    });
  };

  const handleConfirm = () => {
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmationModal(false);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const ConfirmationModal = () => (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Order Summary</h2>
        <div className={styles.summaryContent}>
          <div className={styles.contactSection}>
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> {contactInfo.name}</p>
            <p><strong>Email:</strong> {contactInfo.email}</p>
            <p><strong>Phone:</strong> {contactInfo.phone}</p>
          </div>
          <div className={styles.orderSection}>
            <h3>Order Details</h3>
            <p>
              <strong>Gift Box Type:</strong> {selectedPersona}
            </p>
            <p>
              <strong>Topper:</strong> {topperSelection?.name || "None"}
            </p>
            <p>
              <strong>Mystery Gift:</strong>{" "}
              {mysteryGiftSelection?.name || "None"}
            </p>
            <p>
              <strong>Self Care Items:</strong>
            </p>
            <ul>
              {selfCareSelections.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
              {thirdSelfCareSelection && (
                <li>{thirdSelfCareSelection.name} (Additional)</li>
              )}
            </ul>
            <p>
              <strong>Textiles:</strong> {textilesSelection?.name || "None"}
            </p>
            <p>
              <strong>Customization:</strong>{" "}
              {customizationSelection?.name || "None"}
            </p>
            <p className={styles.totalPrice}>
              <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
        <div className={styles.modalActions}>
          <button
            type="button"
            onClick={handleCloseConfirmation}
            className={styles.modalButton}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const renderOptionButtons = (category, options) => (
    <div className={styles.categorySection}>
      <h3 className={styles.categoryTitle}>{category} Selection:</h3>
      <div className={styles.optionsContainer}>
        {options.map((item) => (
          <button
            type="button"
            key={item.name}
            onClick={() => handleSelection(category, item)}
            className={`
              ${styles.optionButton} 
              ${
                (category === "topper" &&
                  topperSelection?.name === item.name) ||
                (category === "mysteryGift" &&
                  mysteryGiftSelection?.name === item.name) ||
                (category === "selfCare" &&
                  selfCareSelections.some(
                    (selection) => selection.name === item.name
                  )) ||
                (category === "thirdSelfCare" &&
                  thirdSelfCareSelection?.name === item.name) ||
                (category === "textiles" &&
                  textilesSelection?.name === item.name) ||
                (category === "customization" &&
                  customizationSelection?.name === item.name)
                  ? styles.selectedOption
                  : styles.unselectedOption
              }
            `}
          >
            <span className={styles.optionName}>{item.name}</span>
            <span className={styles.optionPrice}>
              {item.price > 0 ? `+$${item.price}` : "Included"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderSelfCareButtons = (options) => (
    <div className={styles.categorySection}>
      <h3 className={styles.categoryTitle}>Self Care Selection (Choose 2):</h3>
      <div className={styles.optionsContainer}>
        {options.map((item) => (
          <button
            type="button"
            key={item.name}
            onClick={() => handleSelection("selfCare", item)}
            className={`
              ${styles.optionButton} 
              ${
                selfCareSelections.some(
                  (selection) => selection.name === item.name
                )
                  ? styles.selectedOption
                  : styles.unselectedOption
              }
            `}
          >
            <span className={styles.optionName}>{item.name}</span>
            <span className={styles.optionPrice}>
              {item.price > 0 ? `+$${item.price}` : "Included"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderThirdSelfCareButtons = (options) => (
    <div className={styles.categorySection}>
      <h3 className={styles.categoryTitle}>Add a Third Self Care Product:</h3>
      <div className={styles.optionsContainer}>
        {options.map((item) => (
          <button
            type="button"
            key={item.name}
            onClick={() => handleSelection("thirdSelfCare", item)}
            className={`
              ${styles.optionButton} 
              ${
                thirdSelfCareSelection?.name === item.name
                  ? styles.selectedOption
                  : styles.unselectedOption
              }
            `}
          >
            <span className={styles.optionName}>{item.name}</span>
            <span className={styles.optionPrice}>
              {item.thirdItemPrice > 0
                ? `+$${item.thirdItemPrice}`
                : "Included"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  if (showPersonaModal) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <h2 className={styles.modalTitle}>Choose Your Gift Box Style</h2>
          <div className={styles.personaGrid}>
            {personas.map((persona) => (
              <button
                key={persona.id}
                className={styles.personaButton}
                onClick={() => handlePersonaSelect(persona.name)}
              >
                <h3>{persona.name}</h3>
                <p>{persona.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentOptions = selectedPersona
    ? giftBoxOptionsByPersona[selectedPersona]
    : null;

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Multi-Cultural Holiday Pop-up</h1>
        <div className={styles.svgContainer}>
          <img
            src="logo-black.svg"
            alt="Gift Box Icon"
            className={styles.svgIcon}
          />
        </div>
      </div>
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>Create {selectedPersona} Gift Box</h2>
      </div>
      <form>
        {currentOptions && (
          <>
            {renderOptionButtons("topper", currentOptions.topper)}
            {renderOptionButtons("mysteryGift", currentOptions.mysteryGift)}
            {renderSelfCareButtons(currentOptions.selfCare)}
            {selfCareSelections.length === 2 &&
              renderThirdSelfCareButtons(currentOptions.selfCare)}
            {renderOptionButtons("textiles", currentOptions.textiles)}
            {renderOptionButtons("customization", currentOptions.customization)}
          </>
        )}
        <div className={styles.priceContainer}>
          <span className={styles.priceLabel}>Total Price:</span>
          <span className={styles.priceValue}>${totalPrice.toFixed(2)}</span>
        </div>
      </form>
      <div className={styles.contactForm}>
        <h3>Contact Information</h3>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleContactChange}
            placeholder="Full Name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleContactChange}
            placeholder="Email Address"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={handleContactChange}
            placeholder="Phone Number"
            className={styles.input}
            required
          />
        </div>
      </div>
      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={handleClear}
          className={styles.clearButton}
        >
          Start Over
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          className={styles.confirmButton}
          disabled={!selectedPersona}
        >
          Review Order
        </button>
      </div>
      {showConfirmationModal && <ConfirmationModal />}
    </div>
  );
};

export default GiftBoxOrderForm;
