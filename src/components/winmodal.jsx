function WinModal({ show, onClose }) {
    if (!show) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '300px', padding: '20px', background: 'white', borderRadius: '8px' }}>
                <h2>Congratulations!</h2>
                <p>You've reached the maximum score!</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default WinModal;