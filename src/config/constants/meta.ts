import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SoldaitSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SoldaitSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SoldaitSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SoldaitSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SoldaitSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SoldaitSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SoldaitSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SoldaitSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SoldaitSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SoldaitSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SoldaitSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SoldaitSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SoldaitSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SoldaitSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SoldaitSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SoldaitSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SoldaitSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SoldaitSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SoldaitSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SoldaitSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SoldaitSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SoldaitSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SoldaitSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SoldaitSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SoldaitSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('SoldaitSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('SoldaitSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SoldaitSwap')}`,
      }
    default:
      return null
  }
}
