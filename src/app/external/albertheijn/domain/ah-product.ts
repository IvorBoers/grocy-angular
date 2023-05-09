import {AhImage} from './ah-image';

export interface AhProduct {
  webshopId: number
  hqId: number
  title: string
  salesUnitSize: string
  unitPriceDescription: string
  images: AhImage[]
  priceBeforeBonus: number
  orderAvailabilityStatus: string
  mainCategory: string
  subCategory: string
  brand: string
  shopType: string
  availableOnline: boolean
  isPreviouslyBought: boolean
  descriptionHighlights: string
  propertyIcons: string[]
  nutriscore?: string
  nix18: boolean
  isStapelBonus: boolean
  extraDescriptions: any[]
  isBonus: boolean
  descriptionFull: string
  isOrderable: boolean
  isInfiniteBonus: boolean
  isSample: boolean
  isSponsored: boolean
  isVirtualBundle: boolean
  auctionId?: string
  bonusStartDate?: string
  bonusEndDate?: string
  discountType?: string
  segmentType?: string
  promotionType?: string
  bonusMechanism?: string
  bonusPeriodDescription?: string
  bonusSegmentId?: number
  bonusSegmentDescription?: string
  hasListPrice?: boolean
  isBonusPrice?: boolean
  productCount?: number
  multipleItemPromotion?: boolean
}
