'use client';
import { useRouter } from "next/navigation";
import { RiDeleteBack2Fill } from "react-icons/ri";
export default function DeleteButton({ id }) {
    const router = useRouter();
    const handleOnDelete = async () => {
        let confirmed = confirm("Are you sure?");
        if (confirmed) {
            try {
                const response = await fetch(`http://localhost:3000/api/Notes?id=${id}`, {
                    method: 'DELETE'
                })
                if (response.ok) {
                    router.refresh();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div>
            <button className="btn btn-danger" onClick={handleOnDelete}><RiDeleteBack2Fill /></button>
        </div>
    )
}