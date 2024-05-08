import Link from "next/link";
export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm mt-2 navbar-dark bg-dark" style={{ borderRadius: '10px' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/features">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary"><Link href={'/addnote'} className="text-light text-decoration-none">Add Note</Link></button>
                </div>
            </nav>
        </div>
    );
}