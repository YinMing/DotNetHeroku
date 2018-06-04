// eslint-disable-next-line
function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

function getValues() {
	const values = ["value1", "value2"];
	
	return values;
	
	//return fetch('/api/values')
		//.then(handleErrors)
		//.then(response => response.json())
		//.catch(err => alert(err));
}

export default {
	getValues
};
