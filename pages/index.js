
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'

export default function Home() {
  return (
   <Layout>
    <div className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-3 gap-4'>
      {data.products.map((product) => (
        < ProductItem product={product} key={product.slug}/>
      ))}
    </div>
   </Layout>
  )
}
