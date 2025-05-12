'use client'

import { useEffect, useState } from 'react'
import supabase from '../../lib/supabase'
import { Box, Typography } from '@mui/material'
import { BarChart } from '@mui/x-charts'

export default function ProductDashboardPage() {
  const [categoryData, setCategoryData] = useState({ categories: [], counts: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategoryData = async () => {
      const { data, error } = await supabase
        .from('Lioncomputer')
        .select('category')

      if (error) {
        console.log('Error:', error)
      } else {
        console.log(data)
        const categoryCounts = data.reduce((acc, product) => {
          const category = product.category
          if (!acc[category]) {
            acc[category] = 0
          }
          acc[category]++
          return acc
        }, {})
        const categories = Object.keys(categoryCounts)
        const counts = Object.values(categoryCounts)

        setCategoryData({ categories, counts })
      }

      setLoading(false)
    }

    fetchCategoryData()
  }, [])

  return (
    <Box
      sx={{
        padding: 3,
        marginTop: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
      }}
    >
      <Typography variant="h6" sx={{ mb: 3 }}>
        Product Categories Overview
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <BarChart
          xAxis={[{ label: 'Categories', scaleType: 'band', data: categoryData.categories }]}
          series={[{ data: categoryData.counts, label: 'Quantity' }]}
          sx={{ height: 400, width: '100%' }}
        />
      )}
    </Box>
  )
}
