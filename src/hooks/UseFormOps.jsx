import React from "react";
import { useState } from "react";

function UseFormOps(initialMembers = []) {
  const [members, setMembers] = useState(initialMembers);

  const addMember = (member) => {
    setMembers([...members, member]);
  };

  const removeMember = (index) => {
    setMembers(members.filter((member, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const shuffleMembers = () => {
    const shuffledMembers = [...members];
    for (let i = shuffledMembers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledMembers[i], shuffledMembers[j]] = [
        shuffledMembers[j],
        shuffledMembers[i],
      ];
    }
    return shuffledMembers;
  };

  const pairMembersSecretSanta = () => {
    const shuffledMembers = shuffleMembers();
    const pairedMembers = [];

    for (let i = 0; i < shuffledMembers.length; i++) {
      const giver = shuffledMembers[i];
      const receiverIndex = (i + 1) % shuffledMembers.length; // Avoid direct matching
      const receiver = shuffledMembers[receiverIndex];

      pairedMembers.push({ giver, receiver });
    }

    return pairedMembers;
  };

  return {
    members,
    addMember,
    removeMember,
    handleInputChange,
    pairMembersSecretSanta,
  };
}

export default UseFormOps;
