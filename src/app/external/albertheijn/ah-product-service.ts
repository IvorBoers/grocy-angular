import {gql} from 'apollo-angular';
import {Injectable} from '@angular/core';

const PRODUCT = gql`
 query product($id: Int!, $date: String) {
  product(id: $id, date: $date) {
    ...product
    __typename
  }
}

fragment product on Product {
  id
  hqId
  title
  brand
  category
  webPath
  salesUnitSize
  availabilityLabel
  interactionLabel
  isSample
  highlight
  highlights
  smartLabel
  hasListPrice
  additionalInformation
  images(renditions: [D200X200, D400X400, D800X800]) {
    ...productImageSet
    __typename
  }
  imagesMulti {
    angle
    small {
      height
      url
      width
      __typename
    }
    medium {
      height
      url
      width
      __typename
    }
    large {
      height
      url
      width
      __typename
    }
    __typename
  }
  availability {
    ...availability
    __typename
  }
  taxonomies {
    id
    name
    active
    parents
    __typename
  }
  tradeItem {
    ...tradeItem
    __typename
  }
  price {
    ...price
    __typename
  }
  discount {
    ...discount
    __typename
  }
  virtualBundleProducts {
    quantity
    __typename
  }
  variant {
    ...variant
    __typename
  }
  variants {
    ...variant
    __typename
  }
  properties {
    code
    values
    __typename
  }
  otherSorts {
    ...productCard
    __typename
  }
  __typename
}

fragment productImageSet on ImageSet {
  width
  height
  url
  __typename
}

fragment availability on ProductAvailability {
  isOrderable
  online {
    status
    availableFrom
    __typename
  }
  unavailableForOrder {
    status
    __typename
  }
  __typename
}

fragment tradeItem on ProductTradeItem {
  gtin
  gtinRevisions
  gln
  description {
    descriptions
    definitions {
      dosageForm
      percentageOfAlcohol
      sunProtectionFactor
      fishCatchInfo
      animalType
      animalFeedType
      __typename
    }
    __typename
  }
  resources {
    icons {
      id
      title
      type
      meta
      __typename
    }
    attachments {
      name
      format
      type
      value
      __typename
    }
    __typename
  }
  contact {
    name
    address
    communicationChannels {
      type
      value
      __typename
    }
    __typename
  }
  ingredients {
    allergens {
      list
      contains
      mayContain
      freeFrom
      __typename
    }
    statement
    nonfoodIngredientStatement
    animalFeeding {
      statement
      analyticalConstituents
      additives
      __typename
    }
    __typename
  }
  nutritions {
    dailyValueIntakeReference
    nutrients {
      type
      name
      value
      superscript
      dailyValue
      __typename
    }
    servingSize
    servingSizeDescription
    preparationState
    additionalInfo {
      value
      label
      __typename
    }
    basisQuantity
    basisQuantityDescription
    __typename
  }
  feedingInstructions {
    statement
    __typename
  }
  usage {
    instructions
    ageDescription
    servingSuggestion
    preparationInstructions {
      extra
      contentLines
      __typename
    }
    dosageInstructions
    precautions
    warnings
    hazardStatements
    signalWord
    duringPregnancy
    duringBreastFeeding
    bacteriaWarning
    __typename
  }
  storage {
    instructions
    lifeSpan
    __typename
  }
  additionalInfo {
    salesConditions
    identificationNumbers {
      type
      label
      value
      __typename
    }
    certificationNumbers
    __typename
  }
  marketing {
    features
    description
    __typename
  }
  contents {
    netContents
    servingSize
    drainedWeight
    servingsPerPackage
    statement
    eMark
    __typename
  }
  origin {
    provenance
    activities {
      rearing
      birth
      slaughter
      __typename
    }
    __typename
  }
  __typename
}

fragment price on ProductPrice {
  now {
    amount
    __typename
  }
  was {
    amount
    __typename
  }
  unitInfo {
    price {
      amount
      __typename
    }
    description
    __typename
  }
  discount {
    segmentId
    description
    __typename
  }
  __typename
}

fragment discount on ProductDiscount {
  description
  promotionType
  segmentType
  subtitle
  theme
  tieredOffer
  __typename
}

fragment variant on ProductVariant {
  label
  type
  product {
    id
    hqId
    title
    brand
    category
    hasListPrice
    salesUnitSize
    availabilityLabel
    isSample
    highlight
    images(renditions: [D200X200]) {
      width
      height
      url
      __typename
    }
    price {
      ...price
      __typename
    }
    discount {
      ...discount
      __typename
    }
    properties {
      code
      values
      __typename
    }
    __typename
  }
  __typename
}

fragment productCard on Product {
  id
  hqId
  title
  brand
  category
  webPath
  salesUnitSize
  availabilityLabel
  interactionLabel
  isSample
  highlight
  highlights
  smartLabel
  hasListPrice
  additionalInformation
  images(renditions: [D200X200]) {
    width
    height
    url
    __typename
  }
  availability {
    ...availability
    __typename
  }
  tradeItem {
    gtin
    gtinRevisions
    __typename
  }
  price {
    ...price
    __typename
  }
  discount {
    ...discount
    __typename
  }
  virtualBundleProducts {
    quantity
    __typename
  }
  variant {
    ...variant
    __typename
  }
  variants {
    ...variant
    __typename
  }
  properties {
    code
    values
    __typename
  }
  __typename
}`;

@Injectable({
  providedIn: 'root'
})
export class AhProductService {

}
