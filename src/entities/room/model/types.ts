export interface Room {
  id: string
  name: string
  nameEn: string
  area: number          // m²
  maxGuests: number
  priceFrom: number     // 円/泊（1名）
  description: string
  features: string[]
  svgColor: string      // accent color for SVG illustration
}
