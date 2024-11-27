// NB: this type must remain version independent

//
// instance has type "unknown" because it's not known
// what version the instance object is
//
export type RuntimeWrappedContext = {
	/**
	 * @brief Version of the context.
	 */
	_version : number

	/**
	 * @brief The wrapped context instance.
	 */
	_instance : unknown
}
