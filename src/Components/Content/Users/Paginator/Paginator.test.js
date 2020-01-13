import React from 'react';
import {create, act} from 'react-test-renderer';
import {Paginator} from './Paginator';


class ClassPaginator extends React.Component{
	render(){
		this.props.update();
		if(this.props.bool){
			return <span>Hello, Guys. How are you?</span>
		}
		else return <input />
	}
	
}

describe('This component must be good', () => {
	test("Input", () => {
		let component = create(
			<ClassPaginator bool={true}/>
		);
		expect(() => {
			let input = root.findByType("input")
		}).toThrow();
	})

	test("Span", () => {
		let component = create(
			<ClassPaginator bool={true}/>
		);
		let root = component.root;
		let span = root.findByType("span");
		expect(span).not.toBeNull();
	})

	test("Update", () => {
		let mockCallback = jest.fn();
		let component = create(
			<ClassPaginator bool={true} update={mockCallback}/>
		);
		component.root.props.update();
		expect(mockCallback.mock.calls.length).toBe(1);
	})
})