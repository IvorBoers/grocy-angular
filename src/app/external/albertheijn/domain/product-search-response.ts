import {Page} from './page';
import {AhProduct} from './ah-product';
import {AhLinks} from './ah-links';
import {AhFilter} from './ah-filter';
import {AhTaxonomyNode} from './ah-taxonomy-node';

export class ProductSearchResponse {
  page: Page
  products: AhProduct[]
  links: AhLinks
  filters: AhFilter[]
  sortOn: string[]
  configuration: Configuration
  ads: any[]
  taxonomyNodes: AhTaxonomyNode[]
}

export interface Configuration {
  googleBanners: GoogleBanners
}

export interface GoogleBanners {
  adUnitMainPath: string
  adUnitSecondaryPath: string
  customTemplateId: string
  divGptAd: string
}
