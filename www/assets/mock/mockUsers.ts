import { UserI } from "src/app/interfaces/tables/user.interface";

export const mockUsers: UserI[] = [
    {
      id: '1',
      createdAt: '2023-01-01T08:30:00Z',
      updatedAt: '2023-01-01T08:30:00Z',
      email: 'john.doe@example.com',
      name: 'John Doe',
      accountType: 'agency',
    },
    {
      id: '2',
      createdAt: '2023-02-10T10:45:00Z',
      updatedAt: '2023-02-10T10:45:00Z',
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      accountType: 'promoter',
    },
    {
      id: '3',
      createdAt: '2023-03-15T12:00:00Z',
      updatedAt: '2023-03-15T12:00:00Z',
      email: 'alice.jones@example.com',
      name: 'Alice Jones',
      accountType: 'agency',
    },
    {
      id: '4',
      createdAt: '2023-04-20T14:30:00Z',
      updatedAt: '2023-04-20T14:30:00Z',
      email: 'bob.brown@example.com',
      name: 'Bob Brown',
      accountType: 'promoter',
    },
    {
      id: '5',
      createdAt: '2023-05-25T16:15:00Z',
      updatedAt: '2023-05-25T16:15:00Z',
      email: 'carol.white@example.com',
      name: 'Carol White',
      accountType: 'agency',
    },
  ];