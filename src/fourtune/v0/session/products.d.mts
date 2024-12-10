import type {FourtuneSessionProduct} from "../FourtuneSessionProduct.d.mts"

export type FourtuneSessionProducts = {
	addProduct: (
		product_name: string
	) => FourtuneSessionProduct
}
