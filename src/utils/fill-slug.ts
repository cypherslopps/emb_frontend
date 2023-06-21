export function fillSlug(value: string) {
	const trimTitle = value.toLowerCase().trim();
	const replaceTitleSpacesWithDashes = trimTitle.replaceAll(" ", "-");

	return replaceTitleSpacesWithDashes;
}