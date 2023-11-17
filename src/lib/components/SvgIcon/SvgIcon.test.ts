import { render, type RenderResult } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import SvgIcon from "./SvgIcon.svelte";

interface IProps {
    name: string;
    title: string;
}

const propsMock: IProps = {
    name: "user",
    title: "User"
};

const renderComponent = (props: IProps): RenderResult<SvgIcon> => render(SvgIcon, {props});

describe('Test SvgIcon component', () => {
    it('Should render the title', () => {
        const { getByText } = renderComponent(propsMock);

        expect(getByText("User")).toBeTruthy();
    });
});