import { ComponentType, useEffect } from 'react';

const withTitle = (title: string) => (WrappedComponent: ComponentType) => {
  const HOC = (props: any) => {
    useEffect(() => {
      document.title = `${title} | Pro Life`;
    }, [title]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTitle;