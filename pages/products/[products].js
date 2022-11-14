import { useRouter } from "next/router";
import React from "react";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";


const products = () => {
  const router = useRouter();
  const { products } = router.query;

  const product = data.products.find((a) => a.slug === products);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout>
   <div className="py-2">
    <Link href="/" className="bg-green-200 rounded-2xl p-3 font-semibold ">Back To Products</Link>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-4">
    <div className="col-span-1 md:col-span-2 lg:col-span-1">
      <Image
      src={product.image}
      alt={product.name}
      width={500}
      height={500}
      layout="responsive">
      </Image>
      </div>
      <div className="bg-green-100  p-4 w-ful">
        <ul>
        <li>
        <h1 className="text-lg font-semibold"> {product.name}</h1>
        </li>
        <li> category: {product.category}</li>
        <li> brand: {product.brand}</li>
        <li> rating: {product.rating} stars ({product.numReviews} reviews)</li>
        <li> description: {product.description}</li>
      </ul>
      </div>
 </div>

 <div className="card p-5">
  <div className="mb-2 flex justify-between">
    <div>
      Price
    </div>
    <div>${product.price}</div>
</div>
<div className="mb-2 flex justify-between">
    <div> status </div>
<div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable' }</div>
 </div>
 </div>



    </Layout>
  )
};

export default products;
