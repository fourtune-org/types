import type {FourtuneSession} from "../index.d.mts"

export type ObjectGenerator = (
	fourtune_session: FourtuneSession,
	object_path: string,
) => Promise<string>

export type Objects = {
	addObject: (
		object_path: string,
		generator: ObjectGenerator
	) => undefined
}
