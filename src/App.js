import React, { useState } from 'react';
import './App.scss';
import { Button, Form, Input, notification } from 'antd';

import {
	getSumaAPI,
	getRestaAPI,
	getMultiplicacionAPI,
	getDivisionAPI
} from './api/calculadora';

function App() {
	const [inputs, setInputs] = useState({
		op1: null,
		op2: null
	});

	const [resMsg, setResMsg] = useState('');

	const changeForm = (event) => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.value
		});
	};

	const sumar = async () => {
		const { op1, op2 } = inputs;

		if (op1 === null || op2 === null) {
			notification['error']({
				message: 'Debe ingresar los dos operandos.'
			});
		} else {
			const result = await getSumaAPI(op1, op2);
			setResMsg(`${op1} + ${op2} = ${result.res}`);
		}
	};

	const restar = async () => {
		const { op1, op2 } = inputs;

		if (op1 === null || op2 === null) {
			notification['error']({
				message: 'Debe ingresar los dos operandos.'
			});
		} else {
			const result = await getRestaAPI(op1, op2);
			setResMsg(`${op1} - ${op2} = ${result.res}`);
		}
	};

	const multiplicar = async () => {
		const { op1, op2 } = inputs;

		if (op1 === null || op2 === null) {
			notification['error']({
				message: 'Debe ingresar los dos operandos.'
			});
		} else {
			const result = await getMultiplicacionAPI(op1, op2);
			setResMsg(`${op1} × ${op2} = ${result.res}`);
		}
	};

	const dividir = async () => {
		const { op1, op2 } = inputs;

		if (op1 === null || op2 === null) {
			notification['error']({
				message: 'Debe ingresar los dos operandos.'
			});
		} else {
			const result = await getDivisionAPI(op1, op2);
			setResMsg(`${op1} ÷ ${op2} = ${result.res}`);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>App Calculadora</p>

				<Form className="form" onChange={changeForm}>
					<Form.Item>
						<Input
							type="number"
							name="op1"
							placeholder="Primer operando"
							className="form__input"
							value={inputs.op1}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="number"
							name="op2"
							placeholder="Segundo operando"
							className="form__input"
							value={inputs.op2}
						/>
					</Form.Item>
					<Form.Item>
						<Button className="form__button" type="primary" onClick={sumar}>
							Sumar
						</Button>
						<Button className="form__button" type="primary" onClick={restar}>
							Restar
						</Button>
						<Button className="form__button" type="primary" onClick={multiplicar}>
							Multiplicar
						</Button>
						<Button className="form__button" type="primary" onClick={dividir}>
							Dividir
						</Button>
					</Form.Item>
				</Form>

				<p>{resMsg}</p>
			</header>
		</div>
	);
}

export default App;
