const Footer = ({ children }) => {
    return (
        <footer className="footer">
            <div className="container">
                {children}
                <p className="copyrights">&copy; 2022 - {new Date().getFullYear()} | <span className="drs0">DRS0</span> All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;