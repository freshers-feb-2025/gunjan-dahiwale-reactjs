import React from 'react';

class ErrorBoundary extends React.Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;