import { Satisfy } from "next/font/google";
const Satisfy_Font = Satisfy({ weight: "400", subsets: ["latin"] });
export default function AddNote() {
    return (
        <div className="container mt-5">
            <form>
                <label htmlFor="title">
                    <h1 className={`${Satisfy_Font.className} mt-3 mb-2`}>Add Note</h1>
                </label>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="title" placeholder="" required />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="description" placeholder="" required />
                    <label htmlFor="description">Description</label>
                </div>
                <div className="form-floating mt-3">
                    <input type="text" className="form-control" id="tag" placeholder="" required />
                    <label htmlFor="tag">Tag</label>
                </div>
                <button type="submit" className="btn btn-warning mt-3 float-end ">Add Note</button>
            </form>
        </div>
    );
}