export const Index = () => {
    const handleSubmit = e => {
        e.preventDefault();
        
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>email address</label>
                    <input type="email" ref={emailField}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" ref={passwordField} />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}