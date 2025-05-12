'use client'

import { useEffect, useState } from 'react'
import supabase from '../../../lib/supabase'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export default function ProductDashboardPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('supabase:', supabase)

    const fetchProducts = async () => {
      const { data, error } = await supabase.from('Lioncomputer').select('*')
      if (error) {
        console.error('Error:', error)
      } else {
        setProducts(data)
      }
      setLoading(false)
    }

    fetchProducts()
  }, [])

  return (
    <Box sx={{ padding: 3, marginTop: '64px' }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 3 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </Box>
        ) : (
          products.map((product) => (
            <Card key={product.id} sx={{ display: 'flex', flexDirection: 'column', height: '100%', textAlign: 'right', boxShadow: 3 }}>
              <Box sx={{ position: 'relative', height: 200 }}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  image={product.image_url}
                  sx={{
                    objectFit: 'cover',
                    height: '100%',
                  }}
                />
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" noWrap>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {product.description}
                </Typography>
                <Box mt={2}>
                  <Typography variant="body1" color="primary">
                    Toman {product.price}
                  </Typography>
                  {product.priceSale && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: 'line-through' }}
                    >
                      Toman {product.priceSale}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))
        )}
      </Box>
    </Box>
  )
}
