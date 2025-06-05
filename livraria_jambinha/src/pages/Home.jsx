import { BookCard } from "../components/BookCard";

export default function Home() {
    return (
      <div className="p-8 grid grid-rows-5 bg-gray-300 w-full h-full">
        <div>
          <h1 className="text-3xl font-bold">Bem-vindo à Home!</h1>
          <p className="mt-4 text-lg">Explorar novas leituras.</p>
        </div>

        <div className="h-full flex">
          <div className="flex flex-wrap gap-10">
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
          </div>
        </div>

        <div className="h-full">
          <h2 className="text-3xl font-bold"></h2>
        </div>
        
        <div className="h-full flex ">
          <div className="flex flex-wrap gap-10">
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
          </div>
        </div>
      </div>
    );
  }
  