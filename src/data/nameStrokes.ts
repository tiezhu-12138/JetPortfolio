// Original name-only slender-gold-style lettering, not a redistributed font.
// Each closed contour is one writing stroke, including its sharp finish.
export const nameStrokes = [
  { character: '孫', pinyin: 'SŪN', name: 'sun', strokes: [
    'M12 20 L41 17 L45 20 L30 36 L28 34 L40 20 L15 22 Z',
    'M28 32 L32 35 L32 84 Q31 94 23 85 L20 81 L29 85 L29 38 Z',
    'M6 53 L44 47 L47 50 L9 55 Z',
    'M88 11 L93 15 Q78 23 61 26 L60 25 Q78 19 88 11 Z',
    'M72 28 L76 31 L62 45 L79 43 L80 45 L58 49 L56 46 Z',
    'M86 34 L90 38 L62 63 L92 57 L92 60 L58 67 L56 64 Z',
    'M87 50 Q96 55 98 63 L95 68 L92 62 L91 57 Z',
    'M76 66 L79 69 L78 94 Q76 101 67 91 L66 88 L75 94 Z',
    'M64 74 L68 78 Q59 91 49 94 L50 92 Z',
    'M89 76 Q103 84 106 92 L104 96 L100 91 Q96 83 89 78 Z',
  ] },
  { character: '佳', pinyin: 'JIĀ', name: 'jia', strokes: [
    'M31 13 L36 17 Q25 39 9 53 L9 51 Q25 30 31 13 Z',
    'M23 37 L27 39 L26 94 L23 100 L22 91 Z',
    'M43 32 L87 29 L91 32 L45 34 Z',
    'M65 13 L70 16 L68 52 L65 55 Z',
    'M35 55 L97 51 L102 54 L39 57 Z',
    'M44 74 L90 70 L94 73 L46 76 Z',
    'M65 61 L70 64 L68 94 L65 97 Z',
    'M34 98 L99 93 L105 96 L39 100 Z',
  ] },
  { character: '航', pinyin: 'HÁNG', name: 'hang', strokes: [
    'M31 10 L36 13 L25 27 L23 26 Z',
    'M19 27 L22 30 Q24 75 8 98 L7 96 Q20 70 19 27 Z',
    'M21 29 L42 25 L46 29 L45 95 Q43 102 34 93 L31 88 L41 94 L42 29 L24 31 Z',
    'M28 38 Q35 41 36 47 L33 51 L30 44 Z',
    'M7 62 L51 54 L53 57 L10 64 Z',
    'M29 69 Q36 72 37 78 L34 82 L32 76 Z',
    'M72 12 Q80 18 80 25 L77 29 L75 23 Z',
    'M56 37 L102 32 L107 35 L59 39 Z',
    'M63 50 L67 52 Q68 83 51 99 L50 97 Q64 79 63 50 Z',
    'M65 52 L86 48 L90 51 L88 90 Q88 95 99 93 L103 77 L104 96 Q95 101 86 97 L84 93 L86 52 L68 54 Z',
  ] },
]

export const strokeScatter = [
  [-22, -22, -14], [9, 8, 9], [-26, 13, -11], [20, -27, 18],
  [-4, -13, -18], [26, 9, 13], [39, -6, 21], [-9, 29, -8],
  [-26, 34, -21], [34, 32, 16],
] as const
