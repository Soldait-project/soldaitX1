import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('SoldaitSwap trading token exchange section.'),
  bodyText: t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur urna ac laoreet facilisis. Sed consectetur'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton:{
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  }
  ,
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },

    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Third portion for Earning Section'),
  bodyText: t('Sub heading for defining the marketplace earning platform'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [

      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Binance Smart Chain Exchangr'),
  bodyText: t(
    'Detail regarding the chain and the product working on the chain Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur urna ac laoreet facilisis. Sed consectetur ',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: t('Buy Soldait'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
     
      { src: 'coin', alt: t('Soldait token') },
 
    ],
  },
})
