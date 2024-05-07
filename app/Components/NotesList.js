import Link from 'next/link';
import { TiEdit } from "react-icons/ti";
import { RiDeleteBack2Fill } from "react-icons/ri";
export default function NotesList() {
    return (
        <>
            <div className="card my-3">
                <div className="card-body">
                    <span className='fw-bold fs-2' style={{ position: 'absolute', top: '3.5%' }}>My Name</span>
                    <h5 className="card-title d-flex justify-content-end">
                        <Link href={'/editnote/123'} className="mx-3">
                            <TiEdit style={{
                                scale: '1.6',
                                color: '#378EBC',
                                marginBottom: '5px',
                            }} />
                        </Link>
                        <RiDeleteBack2Fill style={{
                            scale: '1.6',
                            cursor: 'pointer',
                            color: 'red',
                        }} className="mx-3" />
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary mt-1">#Personal</h6>
                    <p className="card-text fs-5">My Name is Hamid Raza</p>
                </div>
            </div>
        </>
    );
}