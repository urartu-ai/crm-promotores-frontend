import { OperationRegisterI } from "src/app/interfaces/tables/operation-register.interface";
import { mockProperties } from "./mockProperties";
import { mockPromotions } from "./mockPromotions";
import { mockContacts } from "./mockContacts";
import { mockOperations } from "./mockOperations";
import { mockUsers } from "./mockUsers";
import { mockAgencies } from "./mockAgencies";

export const mockRegisters: any[] = [
    {
        id: '1',
        createdAt: '2021-06-01T10:00:00.000Z',
        updatedAt: '2021-06-01T10:00:00.000Z',
        acceptDate: '2021-06-01T10:00:00.000Z',
        rejectDate: '2021-06-01T10:00:00.000Z',
        status: 'pending',
        property: mockProperties[0],
        propertyId: '1',
        promotion: mockPromotions[0],
        promotionId: '1',
        contact: mockContacts[0],
        contactId: '1',
        operation: mockOperations[0],
        operationId: '1',
        createdBy: mockUsers[0],
        createdById: '1',
        handledBy: mockUsers[1],
        handledById: '2',
        agency: mockAgencies[0],
        agencyId: '1',
        promoterId: '1'
    }
]