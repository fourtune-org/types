import type {FourtuneSession} from "./FourtuneSession.d.mts"

export type FourtuneSessionProduct = {
	addDistributable: ((
		name: string,
		file_name: string,
		generator: (
			fourtune_session: FourtuneSession,
			product_name: string
		) => string
	) => FourtuneSessionProduct) | ((
		name: string,
		file_name: string[],
		generator: (
			fourtune_session: FourtuneSession,
			product_name: string
		) => string[]
	) => FourtuneSessionProduct)
}
