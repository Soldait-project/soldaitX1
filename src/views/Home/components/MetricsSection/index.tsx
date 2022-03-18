import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="bronze" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="binance" width="36px" />,
  }
   const EarnCardData: IconCardData = {
     icon: <ChartIcon color="secondary" width="36px" />,
   }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl">
        {t('Heading of the Section ')}
      </Heading>

      <Text textAlign="center" color="textSubtle">
        {t(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan velit ut sem pellentesque, a consequat metus euismod.',
        )}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{tvl ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '13px']} mb={['10px', null, null, '0']}>
          <StatCardContent
            headingText={t('amount users', { users })}
            bodyText={t('in our website regularly')}
            highlightColor={theme.colors.bronze}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '13px']} mb={['10px', null, null, '0']}>
          <StatCardContent
            headingText={t('amount trades', { trades })}
            bodyText={t('made in our website regularly')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('amount earned', { tvl: tvlString })}
            bodyText={t('amount earned through game and lottery ')}
            highlightColor={theme.colors.binance}
          />
        </IconCard>
       
      </Flex>
    </Flex>
  )
}

export default Stats
