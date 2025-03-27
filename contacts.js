const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading contacts:", error);
  }
}

async function getContactById(contactId) {
  try {
    const allContacts = await listContacts();
    const contacts = allContacts.find((contact) => contact.id === contactId);
    return contacts || null;
  } catch (error) {
    console.error("Error finding contacts:", error);
  }
}

async function removeContact(contactId) {
  try {
    const allContacts = listContacts();
    const contactToRemove = allContacts.find(
      (contact) => contact.id === contactId
    );
    if (!contactToRemove) {
      return null;
    }
    const filteredContacts = allContacts.filter(
      (contact) => contact.id !== contactId
    );

    await fs.writeFile(contactPath, JSON.stringify(filteredContacts, null, 2));
    return contactToRemove;
  } catch (error) {
    console.error("Error finding contact:", error);
  }
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
