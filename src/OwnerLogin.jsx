import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import './OwnerLogin.css';

function OwnerLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .catch(() => {
                setError('Wrong email or password');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="login-wrap">
            <form className="login-card" onSubmit={handleLogin}>
                <div className="login-brand">
                    <div className="login-mark">H</div>
                    <div className="login-word">Hive</div>
                </div>
                <p className="login-sub">Sign in to take and manage orders</p>

                <label className="login-label">Email</label>
                <input
                    type="email"
                    className="login-input"
                    placeholder="you@hive.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label className="login-label">Password</label>
                <input
                    type="password"
                    className="login-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="login-error">{error}</p>}

                <button type="submit" className="login-btn" disabled={loading}>
                    {loading ? 'Signing in…' : 'Sign in'}
                </button>
            </form>
        </div>
    );
}

export default OwnerLogin;