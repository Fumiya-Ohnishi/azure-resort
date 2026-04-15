import type { Room } from './types'

export const ROOMS: Room[] = [
  {
    id: 'ocean-deluxe',
    name: 'オーシャン デラックス',
    nameEn: 'Ocean Deluxe',
    area: 52,
    maxGuests: 2,
    priceFrom: 48000,
    description:
      '水平線を一望できる広大なオーシャンビュー。ターコイズブルーの海を眼前に、開放感あふれる空間でくつろぎのひとときを。',
    features: ['オーシャンビュー', 'バルコニー付き', 'キングサイズベッド', 'バスタブ'],
    svgColor: '#00B4C8',
  },
  {
    id: 'garden-premier',
    name: 'ガーデン プレミア',
    nameEn: 'Garden Premier',
    area: 64,
    maxGuests: 2,
    priceFrom: 58000,
    description:
      '南国の花々が咲き誇るプライベートガーデンに面したお部屋。緑の息吹と朝の光が優しく迎えるひとときを演出します。',
    features: ['ガーデンビュー', 'プライベートテラス', 'キングサイズベッド', 'オープンバス'],
    svgColor: '#4CAF7D',
  },
  {
    id: 'azure-suite',
    name: 'アジュール スイート',
    nameEn: 'Azure Suite',
    area: 96,
    maxGuests: 3,
    priceFrom: 98000,
    description:
      '海に張り出したオーバーウォータースイート。リビング・ダイニング・寝室が一体となった贅沢な空間で、非日常の極みを体験してください。',
    features: ['360°パノラマ', 'プライベートプール', 'バトラーサービス', 'ジャグジー'],
    svgColor: '#1A4A7A',
  },
  {
    id: 'sky-villa',
    name: 'スカイ ヴィラ',
    nameEn: 'Sky Villa',
    area: 140,
    maxGuests: 4,
    priceFrom: 168000,
    description:
      '最上階に位置し、無限の空と海が溶け合う景色を独り占め。完全プライベートなヴィラで、特別な記念日を永遠の思い出に。',
    features: ['最上階専有', 'インフィニティプール', 'シェフサービス', 'ヘリパッド隣接'],
    svgColor: '#C8A96E',
  },
]
