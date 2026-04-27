const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function addProductsToSalesDistribution() {
  const products = [
    'IT equipment, software (e.g. printers, laptops)',
    'Communication Equipment and Gadgets',
    'Office and home wears equipment',
    'Electrical and Electronics',
    'Carbon reduction technology',
  ]

  const brands = [
    'HP',
    'DELL',
    'APPLE',
    'LENOVO',
    'CISCO',
    'FORTINET',
    'SONICWALL',
  ]

  try {
    const result = await client
      .patch('1KjNhVUscwCwiDwpK3ryns')
      .set({
        products,
        brands,
      })
      .commit()

    console.log('✓ Added products and brands to Sales and Distribution')
    console.log(`Products: ${products.length}, Brands: ${brands.length}`)
  } catch (err) {
    console.error('✗ Failed:', err.message)
  }
}

addProductsToSalesDistribution().catch(console.error)
