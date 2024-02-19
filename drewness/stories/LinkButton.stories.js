import LinkButton from '../app/components/Buttons/LinkButton';

export default {
    title: 'Link Button',
    component: LinkButton,
};

const Template = (args) => <LinkButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    href: '/',
    label: 'Primary',
    size: 'md',
    style: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    href: '/',
    label: 'Secondary',
    size: 'md',
    style: 'secondary',
};

// export const Secondary = () => <LinkButton label="Secondary"></LinkButton>;

// export const Style: Story = {
//     args: {
//       variant: 'primary',
//     },
//   };
