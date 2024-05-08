import NotesList from "./Components/NotesList";

export default function Home() {
  return (
    <div className="container">
      <h1 className={`mt-3 mb-2`}>Your Notes</h1>
      <NotesList />
    </div>
  );
}
