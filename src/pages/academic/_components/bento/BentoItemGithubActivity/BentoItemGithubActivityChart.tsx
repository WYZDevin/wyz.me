import { Github } from '@icons/Github'
import HeatMap, { type SVGProps } from '@uiw/react-heat-map'
import React, { useEffect, useState } from 'react'

import { formatDate, formatNumber, getDateSuffix } from '@/lib/utils'
import type { GithubContributionData } from '@/types'

import BentoBadge from '../BentoBadge'
import client from '@/lib/client'

const getDateProps = () => {
  const today = new Date()
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(today.getMonth() - 6)

  return { startDate: sixMonthsAgo, endDate: today }
}

const renderRect = (handleMouseEnter: (date: string) => void): SVGProps['rectRender'] => (props, data) => {
  const date = new Date(data.date)
  const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' }) + getDateSuffix(date.getDate())
  const tileInfo = `${data.count ? formatNumber(data.count) : 'No'} contributions on ${formattedDate}`

  return (
    <rect
      className='transition-all hover:brightness-125'
      onMouseEnter={() => handleMouseEnter(tileInfo)}
      {...props}
    />
  )
}

const BentoGithubActivity = () => {
  const [data, setData] = useState<GithubContributionData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.api.github.contributions.$get()
      console.log(response)
      if (response.status === 200) {
        const jsonData = await response.json()
        setData(jsonData)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  const defaultValue = data ? `${formatNumber(data.totalContributions)} contributions in the last year` : ''
  const [hoveredTile, setHoveredTile] = useState<string | null>(defaultValue)

  useEffect(() => {
    setHoveredTile(defaultValue)
  }, [defaultValue])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!data) {
    return <p>Something went wrong 😔</p>
  }

  return (
    <div className='relative flex h-full flex-col justify-between px-4 pb-5 pt-4 max-md:gap-4'>
      <div className='flex items-baseline justify-between gap-4 max-xs:flex-col'>
        <BentoBadge icon={Github} text='Github activity' />
        <p className='line-clamp-1 text-sm'>{hoveredTile}</p>
      </div>
      <div className='w-full overflow-x-scroll'>
        <HeatMap
          {...getDateProps()}
          onMouseLeave={() => setHoveredTile(defaultValue)}
          className='w-[550px]'
          value={data.contributions ?? []}
          weekLabels={false}
          monthLabels={false}
          legendCellSize={0}
          space={4}
          style={{ color: 'var(--text-primary)' }}
          rectProps={{ rx: 4 }}
          rectSize={16}
          rectRender={renderRect((date) => setHoveredTile(date))}
          panelColors={{
            1: '#fef3c7',
            4: '#fbbf24',
            8: '#f59e0b',
            12: '#d97706'
          }}
        />
      </div>
      {
        <p className='text-sm text-theme-secondary max-sm:text-xs sm:max-lg:mt-4'>
          Last pushed on {formatDate(new Date(data.lastPushedAt))}
        </p>
      }
    </div>
  )
}

export default BentoGithubActivity