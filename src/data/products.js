// Storefront-facing data for the homepage grid + product modal.
// Deliberately separate from src/data/drops.js — that file holds the
// NFC/password secrets for /drop/:id and should never be imported here.
export const PRODUCTS = [
  {
    id: '001',
    name: 'Signal in Red',
    status: 'ACTIVE',
    statusVariant: 'active',
    shoppable: true,
    price: '$120',
    image: '/assets/heart.jpeg',
    imageWhite: '/assets/heart-white.jpeg',
    description:
      'Heavyweight 240gsm cotton tee, hand-finished screen print. An NFC chip is stitched into the inner hem — tap it to enter the piece’s hidden digital layer. Part of the CODEINK Drop series.',
  },
  {
    id: '002',
    name: 'Static Bloom',
    status: 'ACTIVE',
    statusVariant: 'active',
    shoppable: true,
    price: '$120',
    image: '/assets/angels.jpeg',
    imageWhite: '/assets/angels-white.jpeg',
    description:
      'Heavyweight 240gsm cotton tee, hand-finished screen print. An NFC chip is stitched into the inner hem — tap it to enter the piece’s hidden digital layer. Part of the CODEINK Drop series.',
  },
  {
    id: '003',
    name: 'Low Frequency',
    status: 'COMING SOON',
    statusVariant: 'encrypted',
    shoppable: false,
    price: null,
    image: '/assets/moon-white.jpeg',
    imageWhite: null,
    description: '',
  },
]
