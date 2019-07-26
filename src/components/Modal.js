import React from 'react';

const overlay = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: "rgba(0,0,0,0.4)",
    zIndex: 99,
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}

const inner = {
    background: '#ffffff',
    padding: '5px'
}

export default ({children, closeHandler, show}) => {
    return (
        show && (
            <div style={overlay}>
                <div style={inner} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        )
    )
}