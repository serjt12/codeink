// Each key is the drop id used in the URL: /drop/001, /drop/002, etc.
// This is the shape the brief asks for — swap in real values per Drop,
// and eventually this should be fetched from a backend instead of
// bundled in the client (see the note in DropPage.jsx about answers).
export const DROPS = {
  '001': {
    id: '001',
    name: 'Signal in Red',
    question: 'CAN YOU HEAR WHAT YOU SEE?',
    accepted: ['paint it black', 'paintitblack'],
    hint: 'The color in the title is also the color this artwork refuses to let go of.',
    song: 'Paint It Black',
    artist: 'The Rolling Stones',
    concept:
      "This piece is built around a song about staring into grief until color itself starts to disappear. Every mark on the garment is a fragment of that feeling — red bleeding into black, shapes dissolving at the edges. The artwork doesn't illustrate the song. It tries to feel like it.",
    spotifyUrl: '#',
    youtubeUrl: '#',
    image: '/assets/heart.jpeg',
    imageWhite: '/assets/heart-white.jpeg',
  },
  '002': {
    id: '002',
    name: 'Static Bloom',
    question: 'WHAT DO BROKEN SIGNALS SOUND LIKE?',
    accepted: ['static bloom', 'staticbloom'],
    hint: 'Look for the pattern in the chaos.',
    song: 'Static Bloom',
    artist: 'CODEINK',
    concept:
      "Interference, noise, the sound of a signal breaking apart. This artwork captures that moment where clarity dissolves into static—every pixel a fragment of lost transmission.",
    spotifyUrl: '#',
    youtubeUrl: '#',
    image: '/assets/angels.jpeg',
    imageWhite: '/assets/angels-white.jpeg',
  },
  '003': {
    id: '003',
    name: 'Low Frequency',
    question: 'CAN YOU FEEL WHAT YOU CANNOT HEAR?',
    accepted: ['low frequency', 'lowfrequency'],
    hint: 'The answer resonates below the surface.',
    song: 'Low Frequency',
    artist: 'CODEINK',
    concept:
      "Vibrations too deep to hear, frequencies that bypass the ear and speak directly to the body. This piece explores the territory between sound and silence.",
    spotifyUrl: '#',
    youtubeUrl: '#',
    image: '/assets/moon-white.jpeg',
    imageWhite: null,
  },
}
