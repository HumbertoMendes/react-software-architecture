import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        if (this.state.error) {
            return <h1>An error has occurred while loading a component</h1>
        }
        return this.props.children;
    }
}
