import { useEffect, useMemo, useRef } from 'react';
import {
    Routes,
    Route,
    useLocation,
    Navigate
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from '../pages/Home';
import Topics from '../pages/Topics';

// Presentations Pages
import AbortionPresentation from '../pages/AbortionPresentation';
import EuthanasiaPresentation from '../pages/EuthanasiaPresentation';
import InVitroPresentation from '../pages/InVitroPresentation';

// Wrapper for the routes
import WrappedRoute from './WrappedRoute';

interface Animation {
    initial: {};
    animate: {};
    exit: {};
    transition: {};
}

const animationVariants: { [key: string]: Animation } = {
    slideUp: {
        initial: { y: 500, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 750, opacity: 0.5 },
        transition: { duration: 0.4 }
    },
    slideDown: {
        initial: { y: -500, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -750, opacity: 0.5 },
        transition: { duration: 0.4 }
    },
    slideLeft: {
        initial: { x: -500, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 500, opacity: 0.5 },
        transition: { duration: 0.4 }
    },
    scale: {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0.5, transition: { duration: 0.35 } },
        transition: { duration: 0.4 }
    }
};

const getAnimationVariant = (from: string, to: string): Animation => {
    // Path: /
    if (from === "/" && to === "/") {
        return animationVariants.scale;
    }
    else if (from === "/" && to === "/topics") {
        return animationVariants.scale;
    }

    // Path: /topics
    else if (from === "/topics" && to === "/") {
        return animationVariants.scale;
    }
    else if (from === "/topics" && to === "/abortion-presentation") {
        return animationVariants.scale;
    }
    else if (from === "/topics" && to === "/euthanasia-presentation") {
        return animationVariants.scale;
    }
    else if (from === "/topics" && to === "/in-vitro-presentation") {
        return animationVariants.scale;
    }

    // Path: /abortion-presentation
    else if (from === "/abortion-presentation" && to === "/") {
        return animationVariants.scale;
    }
    else if (from === "/abortion-presentation" && to === "/topics") {
        return animationVariants.scale;
    }

    // Path: /euthanasia-presentation
    else if (from === "/euthanasia-presentation" && to === "/") {
        return animationVariants.scale;
    }
    else if (from === "/euthanasia-presentation" && to === "/topics") {
        return animationVariants.scale;
    }

    // Path: /in-vitro-presentation
    else if (from === "/in-vitro-presentation" && to === "/") {
        return animationVariants.scale;
    }
    else if (from === "/in-vitro-presentation" && to === "/topics") {
        return animationVariants.scale;
    }

    return animationVariants.scale; // Default animation
};

const AnimatedRoutes = () => {
    const location = useLocation();
    const prevLocationRef = useRef(location.pathname);

    useEffect(() => {
        prevLocationRef.current = location.pathname;
    }, [location.pathname]);

    const animation = useMemo(() => {
        return getAnimationVariant(prevLocationRef.current, location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        // Disable scroll restoration
        window.history.scrollRestoration = 'manual'
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={
                <WrappedRoute
                    component={Home}
                    title="Home"
                    animation={animation}
                />}
            />
            <Route path="/topics" element={
                <WrappedRoute
                    component={Topics}
                    title="Topics"
                    animation={animation}
                />}
            />
            <Route path="/abortion-presentation" element={
                <WrappedRoute
                    component={AbortionPresentation}
                    title="Abortion Presentation"
                    animation={animation}
                />}
            />
            <Route path="/euthanasia-presentation" element={
                <WrappedRoute
                    component={EuthanasiaPresentation}
                    title="Euthanasia Presentation"
                    animation={animation}
                />}
            />
            <Route path="/in-vitro-presentation" element={
                <WrappedRoute
                    component={InVitroPresentation}
                    title="In Vitro Presentation"
                    animation={animation}
                />}
            />
            {/* Redirect to homepage when it can't find URL */}
            <Route path="*" element={
                    <Navigate to="/" />
                }
            />
      </Routes>
    </AnimatePresence>
    );
};

export default AnimatedRoutes;
