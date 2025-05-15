import { useRouter } from "next/router";
import { type NextPage } from "next";
import Image from "next/image";

import products, { type Product } from "../../products"; // Adjust the import path if needed

interface ProductPageProps {
  product: Product | undefined;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      {product.lowSugarVariant && <p>Low Sugar Variant Available</p>}
      {product.nutritionFactsImgUrl && (
        <Image
          src={product.nutritionFactsImgUrl}
          alt={`${product.name} Nutrition Facts`}
          width={300}
        />
      )}
      {product.lowSugarNutritionFactsImgUrl && (
        <Image
          src={product.lowSugarNutritionFactsImgUrl}
          alt={`${product.name} Low Sugar Nutrition Facts`}
          width={300}
        />
      )}
      {product.salesChannel && <p>Sales Channel: {product.salesChannel}</p>}
      {product.featured && <p>Featured Product</p>}
      {/* Add more product details here */}
    </div>
  );
};

export const getServerSideProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  return {
    props: {
      product: product,
    },
  };
};

export default ProductPage;
