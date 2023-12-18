import React from "react";
import UseFormOps from "../../hooks/UseFormOps";
import emailjs from "@emailjs/browser";

function SecretSanta() {
  const {
    members,
    addMember,
    removeMember,
    handleInputChange,
    pairMembersSecretSanta,
  } = UseFormOps([
    { name: "John", email: "john@example.com" },
    { name: "Hera", email: "hera@example.com" },
  ]);

  const drawAndSendEmails = (e) => {
    e.preventDefault();
    const pairedMembers = pairMembersSecretSanta();
    console.log(pairedMembers);
    const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

    for (let i = 0; i < pairedMembers.length; i++) {
      const giver = pairedMembers[i].giver;
      const receiver = pairedMembers[i].receiver;

      emailjs
        .send(
          serviceId,
          templateId,
          {
            giver: giver.name,
            reciever: receiver.name,
            to_email: giver.email,
          },
          publicKey
        )
        .then((res) => {
          console.log("Email successfully sent!", res);
        })
        // Handle errors here however you like, or use a React error boundary
        .catch((err) =>
          console.error(
            "Oh well, you failed. Here some thoughts on the error that occured:",
            err
          )
        );
    }
  };

  return (
    <div class="container mx-auto p-4 w-1/2">
      <form class="mt-12">
        <div class="grid grid-cols-5 gap-6 mb-3">
          <div class="col-span-2">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
          </div>
          <div class="col-span-2">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-2">
          {members.map((member, index) => (
            <div class="grid grid-cols-5 gap-6 p-2 bg-white rounded-lg">
              <div class="col-span-2">
                <input
                  type="text"
                  id={"name" + index}
                  value={member.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div class="col-span-2">
                <input
                  type="email"
                  id={"email" + index}
                  value={member.email}
                  onChange={(e) =>
                    handleInputChange(index, "email", e.target.value)
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@superapp.com"
                  required
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div class="grid grid-cols-3 gap-6">
            <button
              class="col start col-span-1 bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => addMember({ name: "", email: "" })}
            >
              Add a new participant
            </button>
            <button
              class="col start col-span-1 bg-blue-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => drawAndSendEmails(e)}
            >
              Draw
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SecretSanta;
