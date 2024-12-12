"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const personas = [
  { id: 1, name: "Adult (Masc)", description: "(Dad, Grandpa, Uncle, Husband)" },
  { id: 2, name: "Adult (Fem)", description: "(Mom, Grandma, Aun, Wife)" },
  { id: 3, name: "Boy", description: "(Son, Grandson, Nephew)" },
  { id: 4, name: "Girl", description: "(Daughter, Granddaughter, Niece)" },
  { id: 5, name: "Baby", description: "Awwww" }
];

const giftBoxOptionsByPersona = {
  "Adult (Masc)": {
    topper: [
      { name: "Ornament", price: 0 },
    ],
    mysteryGift: [
      { name: "Engraved Pocket Knife", price: 0 },
    ],
    selfCare: [
      { name: "Big Mousse", price: 0, thirdItemPrice: 30 },
      { name: "Shave Cream", price: 0, thirdItemPrice: 21 },
      { name: "Shave Tonic", price: 0, thirdItemPrice: 21 },
      { name: "Volume Hero", price: 0, thirdItemPrice: 25 },
      { name: "Groom Guru", price: 0, thirdItemPrice: 25 },
      { name: "NEW Candle", price: 7, thirdItemPrice: 32 },
      { name: "First Hand (all-purpose pomade)", price: 0, thirdItemPrice: 25 },
      { name: "First Hand (texturizing)", price: 0, thirdItemPrice: 25 },
    ],
    textiles: [
      { name: "None", price: 0 },
    ],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
  "Adult (Fem)": {
    topper: [
      { name: "Brooch", price: 0 },
    ],
    mysteryGift: [
      { name: "SS Chain", price: 0 },
      { name: "SS Earings (S, M L)", price: 0 },
    ],
    selfCare: [
      { name: "Big Mousse", price: 0, thirdItemPrice: 30 },
      { name: "Volume Hero", price: 0, thirdItemPrice: 25 },
      { name: "Groom Guru", price: 0, thirdItemPrice: 25 },
      { name: "NEW Candle", price: 7, thirdItemPrice: 32 },
      { name: "First Hand (all-purpose pomade)", price: 0, thirdItemPrice: 25 },
      { name: "First Hand (texturizing)", price: 0, thirdItemPrice: 25 },
    ],
    textiles: [
      { name: "None", price: 0 },
    ],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
  "Boy": {
    topper: [
      { name: "Figurine", price: 0 },
    ],
    mysteryGift: [
      { name: "[BLANK]", price: 0 },
    ],
    selfCare: [
      { name: "Big Mousse", price: 0, thirdItemPrice: 30 },
      { name: "Volume Hero", price: 0, thirdItemPrice: 25 },
      { name: "Groom Guru", price: 0, thirdItemPrice: 25 },
      { name: "First Hand (all-purpose pomade)", price: 0, thirdItemPrice: 25 },
      { name: "First Hand (texturizing)", price: 0, thirdItemPrice: 25 },
    ],
    textiles: [
      { name: "Socks", price: 0 },
    ],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
  "Girl": {
    topper: [
      { name: "Charm", price: 0 },
    ],
    mysteryGift: [
      { name: "SS Chain", price: 0 },
      { name: "SS Earings (S, M L)", price: 0 },
    ],
    selfCare: [
      { name: "Big Mousse", price: 0, thirdItemPrice: 30 },
      { name: "Volume Hero", price: 0, thirdItemPrice: 25 },
      { name: "Groom Guru", price: 0, thirdItemPrice: 25 },
      { name: "First Hand (all-purpose pomade)", price: 0, thirdItemPrice: 25 },
      { name: "First Hand (texturizing)", price: 0, thirdItemPrice: 25 },
    ],
    textiles: [
      { name: "Socks", price: 0 },
    ],
    customization: [
      { name: "Stock", price: 0 },
      { name: "Airbrushed Stocking", price: 10 },
      { name: "Hand Painted Box", price: 10 },
    ],
  },
  "Baby": {
    topper: [
      { name: "Plush", price: 0 },
    ],
    mysteryGift: [
      { name: "[BLANK]", price: 0 },
    ],
    selfCare: [
      { name: "None", price: 0 },
    ],
    textiles: [
      { name: "Servilletas", price: 0 },
    ],
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
    switch(category) {
      case 'topper':
        setTopperSelection(item);
        break;
      case 'mysteryGift':
        setMysteryGiftSelection(item);
        break;
      case 'selfCare':
        // Handle multiple selections (max 2)
        if (selfCareSelections.find(selection => selection.name === item.name)) {
          // Remove if already selected
          setSelfCareSelections(selfCareSelections.filter(
            selection => selection.name !== item.name
          ));
        } else if (selfCareSelections.length < 2) {
          // Add if less than 2 selections
          setSelfCareSelections([...selfCareSelections, item]);
        }
        break;
      case 'thirdSelfCare':
        setThirdSelfCareSelection(item);
        break;
      case 'textiles':
        setTextilesSelection(item);
        break;
      case 'customization':
        setCustomizationSelection(item);
        break;
    }
    
    // Calculate the new price directly using the new selection
    let newPrice = 113; // Base starting price
    const newSelection = {
      topper: category === 'topper' ? item : topperSelection,
      mysteryGift: category === 'mysteryGift' ? item : mysteryGiftSelection,
      selfCare: category === 'selfCare' 
        ? (item.name === selfCareSelections[0]?.name 
          ? [selfCareSelections[1]] 
          : item.name === selfCareSelections[1]?.name 
            ? [selfCareSelections[0]]
            : [...selfCareSelections, item].slice(0, 2))
        : selfCareSelections,
      thirdSelfCare: category === 'thirdSelfCare' ? item : thirdSelfCareSelection,
      textiles: category === 'textiles' ? item : textilesSelection,
      customization: category === 'customization' ? item : customizationSelection,
    };
    
    if (newSelection.topper) newPrice += newSelection.topper.price;
    if (newSelection.mysteryGift) newPrice += newSelection.mysteryGift.price;
    newSelection.selfCare.forEach(item => {
      if (item) newPrice += item.price;
    });
    if (newSelection.thirdSelfCare) {
      newPrice += newSelection.thirdSelfCare.thirdItemPrice;
    }
    if (newSelection.textiles) newPrice += newSelection.textiles.price;
    if (newSelection.customization) newPrice += newSelection.customization.price;
    
    setTotalPrice(newPrice);
  };

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
                (category === "topper" && topperSelection?.name === item.name) ||
                (category === "mysteryGift" &&
                  mysteryGiftSelection?.name === item.name) ||
                (category === "selfCare" && selfCareSelections.some(selection => selection.name === item.name)) ||
                (category === "thirdSelfCare" && thirdSelfCareSelection?.name === item.name) ||
                (category === "textiles" && textilesSelection?.name === item.name) ||
                (category === "customization" && customizationSelection?.name === item.name)
                  ? styles.selectedOption
                  : styles.unselectedOption
              }
            `}
          >
            <span className={styles.optionName}>{item.name}</span>
            <span className={styles.optionPrice}>
              {item.price > 0 ? `+$${item.price}` : "No extra cost"}
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
            onClick={() => handleSelection('selfCare', item)}
            className={`
              ${styles.optionButton} 
              ${selfCareSelections.some(selection => selection.name === item.name)
                ? styles.selectedOption
                : styles.unselectedOption}
            `}
          >
            <span className={styles.optionName}>{item.name}</span>
            <span className={styles.optionPrice}>
              {item.price > 0 ? `+$${item.price}` : 'No extra cost'}
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
            onClick={() => handleSelection('thirdSelfCare', item)}
            className={`
              ${styles.optionButton} 
              ${thirdSelfCareSelection?.name === item.name
                ? styles.selectedOption
                : styles.unselectedOption}
            `}
          >
            <span className={styles.optionName}>{item.name}</span>
            <span className={styles.optionPrice}>
              {item.thirdItemPrice > 0 ? `+$${item.thirdItemPrice}` : 'No extra cost'}
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

  const currentOptions = selectedPersona ? giftBoxOptionsByPersona[selectedPersona] : null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create {selectedPersona} Gift Box</h2>
      <form>
        {currentOptions && (
          <>
            {renderOptionButtons("topper", currentOptions.topper)}
            {renderOptionButtons("mysteryGift", currentOptions.mysteryGift)}
            {renderSelfCareButtons(currentOptions.selfCare)}
            {selfCareSelections.length === 2 && renderThirdSelfCareButtons(currentOptions.selfCare)}
            {renderOptionButtons("textiles", currentOptions.textiles)}
            {renderOptionButtons("customization", currentOptions.customization)}
          </>
        )}
        <div className={styles.priceContainer}>
          <span className={styles.priceLabel}>Total Price:</span>
          <span className={styles.priceValue}>${totalPrice.toFixed(2)}</span>
        </div>
      </form>
    </div>
  );
};

export default GiftBoxOrderForm;
