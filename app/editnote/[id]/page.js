import EditButton from '@/app/Components/EditButton';
export default async function EditNote({ params }) {
    const { id } = params;
    const getNoteById = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/Notes/${id}`, {
                method: 'GET',
                cache: 'no-store'
            })
            if (!response.ok) {
                throw new Error('Failed to Fetch Note from Database.');
            }
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
    const { note } = await getNoteById(id)
    const { title, description, tag } = note;
    return (
        <EditButton title={title} description={description} tag={tag} id={id} />
    )
}