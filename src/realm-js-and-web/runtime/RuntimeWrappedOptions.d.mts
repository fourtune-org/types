// NB: this type must remain version independent

//
// options has type "unknown" because it's not known
// what version the options object is
//
export type RuntimeWrappedOptions = {
	/**
	 * @brief Version of the context.
	 */
	_version : number

	/**
	 * @brief The wrapped options.
	 */
	_options : unknown
}
