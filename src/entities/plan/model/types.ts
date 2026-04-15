export interface Plan {
  id: string
  name: string
  nameEn: string
  price: number       // 円/泊（1名）
  badge?: string
  description: string
  includes: string[]
  highlight?: boolean
}
