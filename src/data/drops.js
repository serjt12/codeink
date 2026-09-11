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
  },
}
