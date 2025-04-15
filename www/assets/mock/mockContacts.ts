import { ContactI } from "src/app/interfaces/tables/contact.interface";

export const mockContacts: ContactI[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    emails: ['juan.perez@example.com'],
    phones: ['+34 600 123 456'],
    address: 'Calle Mayor 123, 28013 Madrid, España',
    reference: 'Ref001',
    origin: 'Idealista',
    photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    photoName: 'juan_perez.jpg',

    createdAt: new Date('2024-01-15T10:00:00'),
    updatedAt: new Date('2024-04-20T15:30:00'),
    tags: [
      { id: 'tag1', value: 'Interested', text: 'Interested in product' },
      { id: 'tag2', value: 'Follow-Up', text: 'Requires follow-up' }
    ]
  },
  {
    id: '2',
    name: 'María López',
    emails: ['maria.lopez@example.com'],
    phones: ['+34 600 789 012'],
    address: 'Avenida de la Constitución 45, 41004 Sevilla, España',
    reference: 'Ref002',
    origin: 'Fotocasa',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    photoName: 'maria_lopez.png',

    createdAt: new Date('2023-11-10T09:30:00'),
    updatedAt: new Date('2024-03-18T11:45:00'),
    tags: [
      { id: 'tag3', value: 'VIP', text: 'VIP customer' }
    ]
  },
  {
    id: '3',
    name: 'Carlos García',
    emails: ['carlos.garcia@example.com', 'cgarcia@personalmail.com'],
    phones: ['+34 600 345 678'],
    address: 'Calle de la Luna 78, 08002 Barcelona, España',
    reference: 'Ref003',
    origin: 'Manual',
    photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    photoName: 'carlos_garcia.jpg',

    createdAt: new Date('2024-02-05T14:20:00'),
    updatedAt: new Date('2024-05-10T16:00:00'),
    tags: [
      { id: 'tag4', value: 'Needs Info', text: 'Needs more information' },
      { id: 'tag5', value: 'Interested', text: 'Interested in product' }
    ]
  },
  {
    id: '4',
    name: 'Lucía Fernández',
    emails: ['lucia.fernandez@example.com'],
    phones: ['+34 600 901 234', '+34 600 567 890'],
    address: 'Paseo de Gracia 256, 08007 Barcelona, España',
    reference: 'Ref004',
    origin: 'Habitaclia',
    photoUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    photoName: 'lucia_fernandez.png',

    createdAt: new Date('2023-12-22T08:15:00'),
    updatedAt: new Date('2024-06-25T13:50:00'),
    tags: [
      { id: 'tag6', value: 'Repeat Client', text: 'Repeat client' }
    ]
  },
  {
    id: '5',
    name: 'Pedro Martínez',
    emails: ['pedro.martinez@example.com'],
    phones: ['+34 600 234 567'],
    address: 'Calle de Alcalá 89, 28014 Madrid, España',
    reference: 'Ref005',
    origin: 'Idealista',
    photoUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    photoName: 'pedro_martinez.jpg',

    createdAt: new Date('2024-03-12T12:00:00'),
    updatedAt: new Date('2024-07-30T10:25:00'),
    tags: [
      { id: 'tag7', value: 'New', text: 'New contact' },
      { id: 'tag8', value: 'Potential', text: 'Potential client' }
    ]
  },
  {
    id: '6',
    name: 'Ana Torres',
    emails: ['ana.torres@example.com'],
    phones: ['+34 600 678 901'],
    address: 'Gran Vía 45, 28013 Madrid, España',
    reference: 'Ref006',
    origin: 'Manual',
    photoUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    photoName: 'ana_torres.jpg',

    createdAt: new Date('2024-04-01T11:00:00'),
    updatedAt: new Date('2024-08-15T14:30:00'),
    tags: [
      { id: 'tag9', value: 'VIP', text: 'VIP customer' },
      { id: 'tag10', value: 'Loyal', text: 'Loyal customer' }
    ]
  }
];
