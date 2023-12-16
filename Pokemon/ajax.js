async function getAdvice() {
	const url = 'https länken'

	const response = await fetch(url)
	const data = await response.json()

	console.log('Data from API:', data);
	// Datans format: " { slip: { advice, id } } "

	return data.slip
}



export { getAdvice }