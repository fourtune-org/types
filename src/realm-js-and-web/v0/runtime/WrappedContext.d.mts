// NB: this type was, but should, remain version independent

//
// instance has type "object" because it's not known
// what version the instance object is
//
export type WrappedContext = {
	/**
	 * @brief Version of the context.
	 */
	_version : number

	/**
	 * @brief The wrapped context instance.
	 */
	_instance : object
}
