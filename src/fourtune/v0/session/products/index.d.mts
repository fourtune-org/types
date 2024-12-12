import type {FourtuneSession} from "../index.d.mts"

export type DistributableGenerator<T> = (
	fourtune_session: FourtuneSession,
	product_name: string
) => T

type AddDistributable = (
	name: string,
	file_name: string,
	generator: DistributableGenerator<string>
) => Product

type AddDistributables = (
	name: string,
	file_name: string[],
	generator: DistributableGenerator<string[]>
) => Product

export type Product = {
	addDistributable: AddDistributable | AddDistributables
}

export type Products = {
	addProduct: (product_name: string) => Product
}
