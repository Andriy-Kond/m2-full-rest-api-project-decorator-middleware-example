import express from "express";
import { contactsController } from "../../controllers/contactsController.js";

export const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getContacts);

contactsRouter.get("/:id", contactsController.getContactById);

contactsRouter.post("/", contactsController.addContact);

contactsRouter.put("/:id", contactsController.editContact);

contactsRouter.delete("/:id", contactsController.removeContact);
