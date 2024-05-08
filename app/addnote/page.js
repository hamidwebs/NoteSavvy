'use client'
import { Satisfy } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Satisfy_Font = Satisfy({ weight: "400", subsets: ["latin"] });
export default function AddNote() {
    const router = useRouter();
    const [details, setDetails] = useState({ title: '', description: '', tag: '' });
    const onChange = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value });
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const { title, description, tag } = details;
        try {
            const response = await fetch('http://localhost:3000/api/Notes', {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    'ContentType': 'application/json'
                },
                body: JSON.stringify({ title, description, tag })
            })
            if (response.ok) {
                router.refresh();
                router.push('/');
            }
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container mt-5">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title">
                    <h1 className={`${Satisfy_Font.className} mt-3 mb-2`}>Add Note</h1>
                </label>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="title" placeholder="" required onChange={onChange} value={details.title} />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="description" placeholder="" required onChange={onChange} value={details.description} />
                    <label htmlFor="description">Description</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="tag" placeholder="" required onChange={onChange} value={details.tag} />
                    <label htmlFor="tag">Tag</label>
                </div>
                <button type="submit" className="btn btn-warning mt-3 float-end ">Add Note</button>
            </form>
        </div>
    );
}