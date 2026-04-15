import type { Plan } from './types'

export const PLANS: Plan[] = [
  {
    id: 'standard',
    name: 'スタンダード',
    nameEn: 'Standard Stay',
    price: 48000,
    description: '海を感じる清々しい朝食付きプラン。アジュールの自然美をシンプルに享受できる基本プランです。',
    includes: [
      'ご朝食（ビュッフェ）',
      'ウェルカムドリンク',
      'プール・ビーチ無料利用',
      'Wi-Fi 完備',
    ],
  },
  {
    id: 'halfboard',
    name: 'ハーフボード',
    nameEn: 'Half Board',
    price: 68000,
    badge: '人気No.1',
    description: '朝食＋夕食付きの贅沢なプラン。シェフ厳選のコース料理で一日の終わりを格上げしてください。',
    includes: [
      'ご朝食（ビュッフェ）',
      '夕食（コースディナー）',
      'ウェルカムシャンパン',
      'プール・ビーチ無料利用',
      'スパ15% OFF',
    ],
    highlight: true,
  },
  {
    id: 'allInclusive',
    name: 'オールインクルーシブ',
    nameEn: 'All Inclusive',
    price: 98000,
    description: '全食事・全アクティビティ・スパが含まれた完全フリープラン。到着から出発まで財布を出す必要がありません。',
    includes: [
      '3食すべて込み',
      'スパ 1回無料',
      'マリンアクティビティ全種',
      '選べるカクテルタイム',
      'プライベートシャトル',
      '特別ターンダウンサービス',
    ],
  },
]
