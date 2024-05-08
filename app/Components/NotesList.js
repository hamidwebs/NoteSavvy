import Link from 'next/link';
import { TiEdit } from "react-icons/ti";
import DeleteButton from './DeleteButton';

export default async function NotesList() {
    const getNotes = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/Notes', {
                cache: 'no-store'
            })
            if (!response.ok) {
                throw new Error('Failed to Fetch Notes from Database.')
            }
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }
    const { note } = await getNotes();
    return (
        <>
            {note.map((note) => {
                return (
                    <div className="card my-3" key={note._id}>
                        <div className="card-body">
                            <span className='fw-bold fs-2' style={{ position: 'absolute', top: '3.5%' }}>{note.title}</span>
                            <h5 className="card-title d-flex justify-content-end">
                                <Link href={`/editnote/${note._id}`} className="mx-3">
                                    <button className="btn btn-primary">
                                        <TiEdit style={{
                                            scale: '1.6',
                                            color: 'white',
                                            marginBottom: '5px',
                                        }} />
                                    </button>
                                </Link>
                                <DeleteButton style={{
                                    scale: '1.6',
                                    cursor: 'pointer',
                                    color: 'red',
                                }} className="mx-3" id={note._id} />
                            </h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary mt-1">#{note.tag}</h6>
                            <p className="card-text fs-5">{note.description}</p>
                        </div>
                    </div>
                )
            })}
        </>
    );
}