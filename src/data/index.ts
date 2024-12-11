import { v4 as uuidv4 } from 'uuid';
import { IFormList, IProduct } from '../interface';

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: 'Product 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://imgs.search.brave.com/ar4AZAnkGD5zadP0RoaOsfJqh6-BeLaJWkSmfU4ByKY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzYxLzMwLzg4/LzM2MF9GXzY2MTMw/ODg5Ml9GQnlGUktm/Y0pqcmtYb2FLNml0/Y0JVWjNVeXNJUW9W/US5qcGc',
    price: '$919.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 1',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 2',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$109.99',
    colors: ['Red', 'Blue', 'orange'],
    category: {
      name: 'Category 2',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 3',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$189.99',
    colors: ['Red', 'Blue', 'yellow'],
    category: {
      name: 'Category 3',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 4',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$129.99',
    colors: ['Red', 'Blue', 'black', 'yellow'],
    category: {
      name: 'Category 4',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 5',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://imgs.search.brave.com/ar4AZAnkGD5zadP0RoaOsfJqh6-BeLaJWkSmfU4ByKY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzYxLzMwLzg4/LzM2MF9GXzY2MTMw/ODg5Ml9GQnlGUktm/Y0pqcmtYb2FLNml0/Y0JVWjNVeXNJUW9W/US5qcGc',
    price: '$199.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 5',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 6',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://imgs.search.brave.com/ar4AZAnkGD5zadP0RoaOsfJqh6-BeLaJWkSmfU4ByKY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzYxLzMwLzg4/LzM2MF9GXzY2MTMw/ODg5Ml9GQnlGUktm/Y0pqcmtYb2FLNml0/Y0JVWjNVeXNJUW9W/US5qcGc',
    price: '$919.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 1',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 7',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://imgs.search.brave.com/ar4AZAnkGD5zadP0RoaOsfJqh6-BeLaJWkSmfU4ByKY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzYxLzMwLzg4/LzM2MF9GXzY2MTMw/ODg5Ml9GQnlGUktm/Y0pqcmtYb2FLNml0/Y0JVWjNVeXNJUW9W/US5qcGc',
    price: '$109.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 2',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 8',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$189.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 3',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 4',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$129.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 4',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 5',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$199.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 5',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 1',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$919.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 1',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 2',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$109.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 2',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 3',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$189.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 3',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 4',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    price: '$129.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 4',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
  {
    id: uuidv4(),

    title: 'Product 5',
    description:
      '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quaerat consectetur iusto et ipsum doloremque ipsam blanditiis quia numquam, rem nam officia iure. Eos voluptatibus modi labore, in sapiente dolorem ea animi magnam et dolorum repellat, nisi ipsum sed saepe.',
    imageURL:
      'https://imgs.search.brave.com/ar4AZAnkGD5zadP0RoaOsfJqh6-BeLaJWkSmfU4ByKY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzYxLzMwLzg4/LzM2MF9GXzY2MTMw/ODg5Ml9GQnlGUktm/Y0pqcmtYb2FLNml0/Y0JVWjNVeXNJUW9W/US5qcGc',
    price: '$199.99',
    colors: ['Red', 'Blue'],
    category: {
      name: 'Category 5',
      imageURL:
        'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww',
    },
  },
];
export const formInputList: IFormList[] = [
  { id: 'title', name: 'title', label: 'Ptoduct Title', type: 'text' },
  {
    id: 'description',
    name: 'description',
    label: 'Ptoduct Description',
    type: 'text',
  },
  {
    id: 'imageURL',
    name: 'imageURL',
    label: 'Ptoduct Image Url',
    type: 'text',
  },
  { id: 'price', name: 'price', label: 'Ptoduct Price', type: 'text' },
];

export const colorList: string[] = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#F1C40F',
  '#8E44AD',
  '#16A085',
  '#2ECC71',
  '#E74C3C',
  '#E74C8C',
  '#E74C2C',
  '#E7145C',
  '#E4560C',
  '#3498DB',
  '#34495E',
];
