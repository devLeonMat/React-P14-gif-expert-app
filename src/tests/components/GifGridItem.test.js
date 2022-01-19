import React from "react";
import {shallow} from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";

describe('test in <GifGridItem/>', () => {

    const title = 'title';
    const url = 'https://localhost/something.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('should display the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('must have a title paragraph', () => {
        expect(wrapper.find('p').text().trim()).toBe(title);
    });

    test('must have an image', () => {
        expect(wrapper.find('img').prop('src')).toBe(url);
        expect(wrapper.find('img').prop('alt')).toBe(title);
    });

    test('must have animate__fadeIn', () => {
        expect(wrapper.find('div').prop('className')).toContain('animate__fadeIn');
    });


})
