import ProductGridItem from "features/products/ProductGridItem"
import ProductGridContainer from "features/products/ProductGridItem/ProductGridContainer"
import useProducts from "features/products/useProducts"
import { FunctionComponent } from "react"

interface Price {
  vinyl: string
  mp3: string
  cd: string
}

interface TrackDetails {
  track_title: string
  track_length: string
}

export interface Product {
  docId: string
  id: string
  artist: string
  album_title: string
  genres: string[]
  track_list: TrackDetails[]
  runtime: string
  formats: string[]
  price: Price
  tags: string[]
  release_date: string
  artwork: string
}

const Products: FunctionComponent = () => {
  const { products } = useProducts()

  return (
    <ProductGridContainer>
      {products.map((product) => (
        <ProductGridItem product={product} key={product.docId} />
      ))}
    </ProductGridContainer>
  )
}

export default Products
