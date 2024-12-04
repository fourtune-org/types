import type {FourtuneConfigBase} from "./config/base.d.mts"
import type {
	FourtuneRealmJSPackageType
} from "./realm/js/package.d.mts"

export type FourtuneConfig = FourtuneConfigBase & (
	FourtuneRealmJSPackageType
)
