import React, { useState, lazy, Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary';

// Important: "lazy" only works with export default
const One = lazy(() => import('./One'));
const Two = lazy(() => import('./Two'));
const Three = lazy(() => import('./Three'));

export const About = () => {
    const [showComponents, setShowComponents] = useState(false);

	return (
		<>
		<h1>About</h1>
        {showComponents && (
            <Suspense fallback={<p>Loading Components...</p>}>
                    {/* In order to not block the loading if one of the components crashes, each component is being wrapped individually by ErrorBoundary */}
                    <ErrorBoundary>
                        <One />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Two />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Three />
                    </ErrorBoundary>
                </Suspense>
        )}
        <button onClick={() => setShowComponents(!showComponents)}>Toggle Component's Visibility</button>
		</>
	);
}

export default About;
