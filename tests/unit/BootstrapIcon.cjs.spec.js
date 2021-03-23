import { render } from '@vue/server-test-utils';
import BootstrapIcon from '../../dist/bootstrap-icon.ssr';
import fileMock from './mocks/fileMock';

describe('BootstrapIcon (CJS)', () => {
    let wrapper;

    it('mounts successfully', async () => {
        console.error = jest.fn();

        wrapper = await render(BootstrapIcon);

        expect(wrapper.length).toBe(1);
        expect(wrapper.find('use').attr('href')).toMatch(`${fileMock}#undefined`);
        expect(console.error.mock.calls[0][0]).toMatch('Missing required prop: "icon"');
    });

    it('supports the icon prop', async () => {
        const icon = 'exclamation-circle-fill';

        wrapper = await render(BootstrapIcon, {
            propsData: {
                icon,
            },
        });

        expect(wrapper.find('use').attr('href')).toMatch(`${fileMock}#${icon}`);
    });

    it('supports the variant prop', async () => {
        const icon = 'exclamation-circle-fill';
        const variant = 'danger';

        wrapper = await render(BootstrapIcon, {
            propsData: {
                icon,
                variant,
            },
        });

        expect(wrapper.attr('class')).toContain(`bi--variant-${variant}`);
    });

    it('supports the size prop', async () => {
        const icon = 'exclamation-circle-fill';
        const size = 'md';

        wrapper = await render(BootstrapIcon, {
            propsData: {
                icon,
                size,
            },
        });

        expect(wrapper.attr('class')).toContain(`bi--size-${size}`);
    });

    it('supports the flip props', async () => {
        const icon = 'exclamation-circle-fill';

        wrapper = await render(BootstrapIcon, {
            propsData: {
                icon,
                flipH: true,
            },
        });

        expect(wrapper.find('g').attr('transform')).toContain('scale(-1 1)');

        wrapper = await render(BootstrapIcon, {
            propsData: {
                icon,
                flipH: true,
                flipV: true,
            },
        });

        expect(wrapper.find('g').attr('transform')).toContain('scale(-1 -1)');

        wrapper = await render(BootstrapIcon, {
            propsData: {
                icon,
                flipH: false,
                flipV: true,
            },
        });

        expect(wrapper.find('g').attr('transform')).toContain('scale(1 -1)');
    });

    it('supports the rotate prop', async () => {
        const icon = 'exclamation-circle-fill';
        const rotate = 90;

        wrapper = await render(BootstrapIcon, {
            propsData: {
                icon,
                rotate,
            },
        });

        expect(wrapper.find('g').attr('transform')).toContain(`rotate(${rotate})`);
    });

    it('supports the animation prop', async () => {
        const icon = 'exclamation-circle-fill';
        const animation = 'spin';

        wrapper = await render(BootstrapIcon, {
            propsData: {
                icon,
                animation,
            },
        });

        expect(wrapper.attr('class')).toContain(`bi--animation-${animation}`);
    });
});
