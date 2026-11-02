
const Header = () => {
    return (
        <>
            <div style={{
                background: 'linear-gradient(135deg, #71c2d6, #aae8f6)',
                padding: '25px 20px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                margin: '15px'
            }}>
                <h1 style={{
                    color: 'white',
                    fontFamily: 'sans-serif',
                    textAlign: 'center',
                    fontSize: '32px',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    margin: '0',
                    cursor: 'pointer',
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
                }}>
                    🌤️ Welcome to Weather Application
                </h1>

                <p style={{
                    color: '#f0faff',
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                    fontSize: '15px',
                    margin: '10px 0 0'
                }}>
                    Check the weather. Plan your day.
                </p>
            </div>
        </>
    )
}

export default Header
