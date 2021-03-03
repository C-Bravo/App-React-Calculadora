import { basePath, apiVersion } from './config';

export function getSumaAPI(op1, op2) {
	const url = `${basePath}/${apiVersion}/suma?op1=${op1}&op2=${op2}`;

	const params = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return fetch(url, params)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}

export function getRestaAPI(op1, op2) {
	const url = `${basePath}/${apiVersion}/resta?op1=${op1}&op2=${op2}`;

	const params = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return fetch(url, params)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}

export function getMultiplicacionAPI(op1, op2) {
	const url = `${basePath}/${apiVersion}/multiplicacion?op1=${op1}&op2=${op2}`;

	const params = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return fetch(url, params)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}

export function getDivisionAPI(op1, op2) {
	const url = `${basePath}/${apiVersion}/division?op1=${op1}&op2=${op2}`;

	const params = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return fetch(url, params)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}
