import React from 'react';

export const One = () => {
    // Used to test the ErrorBoundary component
    // This will break in dev but not in prod
    throw new Error('Ruh-roh Shaggy');
	// eslint-disable-next-line no-unreachable
	return (
		<h2>One</h2>
	);
}

export default One;
