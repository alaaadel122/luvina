import {
     useQuery,
     useMutation,
     useQueryClient,
     QueryClient,
     QueryClientProvider,
} from '@tanstack/react-query'
import getProducts from './actions/getProducts'

export default function Products() {
     const queryClient = useQueryClient()
     const products = useQuery({ queryKey: ['prodcuts'], queryFn: getProducts })
     console.log("",products)
     return (
         <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.data?.map((product:any) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.imageCover}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold line-clamp-1">
                {product.title}
              </h2>

              <p className="text-gray-500 mt-2">${product.price}</p>

              <p className="text-yellow-500 mt-1">
                ⭐ {product.ratingsAverage}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
     )
}
