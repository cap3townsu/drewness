export interface Props {
    size: 'sm' | 'md' | 'lg';
    style: 'primary' | 'secondary';
}

const GetClasses = ({ size = 'md', style = 'primary' }: Props) => {
    let sizeClasses;
    switch (size) {
        case 'sm':
            sizeClasses = 'h8 px-4 m-2 text-sm';
            break;
        case 'lg':
            sizeClasses = 'h12 px-6 m-2 text-lg';
            break;
        default: // to include case 'md'
            sizeClasses = 'h10 px-5 m-2';
    }

    let styleClasses;
    switch (style) {
        case 'secondary':
            styleClasses = 'bg-transparent hover:bg-blue-700 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full';
            break;
        default: // to include case 'primary'
            styleClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full';
    }

    return `${sizeClasses} ${styleClasses}`;
};

export default GetClasses;
