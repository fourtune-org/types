import type {FourtuneSession} from "../session.d.mts"

export type FourtuneSessionProduct = {
	addDistributable: ((
		name: string,
		file_name: string,
		generator: (
			fourtune_session: FourtuneSession
		) => string
	) => FourtuneSessionProduct) | ((
		name: string,
		file_name: string[],
		generator: (
			fourtune_session: FourtuneSession
		) => string[]
	) => FourtuneSessionProduct)
}

export type FourtuneSessionProducts = {
	addProduct: (
		product_name: string
	) => FourtuneSessionProduct
}
