import React from 'react';

import withTitle from '../hoc/withTitle';

interface Props {
    component: React.ComponentType;
    title: string;
    animation?: { [key: string]: any };
}

const WrappedRoute: React.FC<Props> = ({ component: Component, title, animation }: Props) => {
    // Get the component with the title and animation props
    const WrappedComponent = withTitle(title)((props: any) => <Component {...props} animation={animation} />)
    return (
        <WrappedComponent />
    );
};

export default WrappedRoute;
