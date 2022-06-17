import React, { useState, lazy, Suspense } from 'react';
// import { One } from './One';
// import { Two } from './Two';
// import { Three } from './Three';

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
                <One />
                <Two />
                <Three />
            </Suspense>
        )}
        <button onClick={() => setShowComponents(!showComponents)}>Toggle Component's Visibility</button>
		</>
	);
}

export default About;
