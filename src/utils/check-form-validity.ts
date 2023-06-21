function checkFormValidity(
	formData: object, 
	...errors: object
) {
	const checkFormData = Object.values(formData).every(value => Boolean(value));

	return checkFormData && !errors
};

export default checkFormValidity;