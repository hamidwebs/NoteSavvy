"use client";
import { Satisfy } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Satisfy_Font = Satisfy({ weight: "400", subsets: ["latin"] });
export default function EditNote(props) {
    const router = useRouter();
    const [details, setDetails] = useState({ title: props.title, description: props.description, tag: props.tag });
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const { title, description, tag } = details;
            const response = await fetch(`http://localhost:3000/api/Notes/${props.id}`, {
                method: 'PUT',
                headers: {
                    'ContentType': 'application/json'
                },
                body: JSON.stringify({ newTitle: title, newDescription: description, newTag: tag })
            })
            if (response.ok) {
                router.push('/');
                router.refresh();
            } else {
                console.log('Failed to Edit Note');
            }
        } catch (error) {
            console.log(error);
        }
    }
    const onChange = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value });
    }
    return (
        <div className="container mt-5">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title">
                    <h1 className={`${Satisfy_Font.className} mt-3 mb-2`}>Edit Note</h1>
                </label>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="title" placeholder="" value={details.title} required onChange={onChange} />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="description" placeholder="" value={details.description} required onChange={onChange} />
                    <label htmlFor="description">Description</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="tag" placeholder="" value={details.tag} required onChange={onChange} />
                    <label htmlFor="tag">Tag</label>
                </div>
                <button type="submit" className="btn btn-info mt-3 float-end ">Edit Note</button>
            </form>
        </div>
    );
}