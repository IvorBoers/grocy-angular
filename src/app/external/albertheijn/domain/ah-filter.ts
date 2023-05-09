import {AhOption} from './ah-option';

export interface AhFilter {
  id: string
  label: string
  options: AhOption[]
  type: string
  booleanFilter: boolean
}
