import NotesList from "./Components/NotesList";
import { Platypi } from 'next/font/google'
const Platypi_Font = Platypi({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container">
      <h1 className={`${Platypi_Font.className} mt-3 mb-2`}>Your Notes</h1>
      <NotesList />
    </div>
  );
}
