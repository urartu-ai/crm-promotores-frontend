import { OperationI } from "src/app/interfaces/tables/operation.interface";
import { mockProperties } from "./mockProperties";

export const mockOperations: OperationI[] = [

    {
        operationType: 'agency',

        contact: {
            "id": "9da74b51-22a1-4ddf-ae5e-09bfb0688cb8",
            "name": "asdasdasd",
            "contactType": null,
            "origin": "Manual",
            "dniPassport": "",
            "nationality": "",
            "birthdate": null,
            "gender": "",
            "alias": "",
            "address": "",
            "emails": [""],
            "phones": [""],
            "urlFacebook": "",
            "urlInstagram": "",
            "urlLinkedIn": "",
            "reference": null,
            "photoUrl": null,
            "photoName": null,
            "userId": "881a3f8c-55d0-40bf-92c5-79f54a69a3e1",
            "promoterId": "d58eb046-227a-4a6e-b0c1-f26dded091f4",
            "agencyId": null
        },
        contactId: "9da74b51-22a1-4ddf-ae5e-09bfb0688cb8",
        agency: {
            id: "1",
            name: "Agency One",
            offices: ["Office A", "Office B"],
            agentsCount: 10,
            visitsInProgressCount: 5,
            visitsCount: 100,
            registersCount: 50,
            email: "agencyone.com"
        },
        agencyId: "1",
        responsible: {
            id: '1',
            createdAt: '2023-01-01T08:30:00Z',
            updatedAt: '2023-01-01T08:30:00Z',
            email: 'john.doe@example.com',
            name: 'John Doe',
            accountType: 'agency',
        },
        responsibleId: '1',
        mainProperty: mockProperties[0],
        selectedProperties: [...mockProperties],
    }

]