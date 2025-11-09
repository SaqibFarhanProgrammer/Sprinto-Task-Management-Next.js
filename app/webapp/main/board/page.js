import { AiOutlinePlus } from "react-icons/ai";

function Board() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 flex flex-col gap-4 md:gap-6 text-white h-auto md:h-[87%]">
        <div className="flex justify-between items-center">

        
      <h1 className="text-2xl sm:text-3xl tracking-tight"   >Board</h1>
      <h1 className="text-lg sm:text-2xl">Todo App</h1>
        </div>

      <div className="board flex flex-col md:flex-row gap-4 justify-between h-auto md:h-[66vh] w-full">
        <div className="board-child bg-[#121212] w-full md:w-[24%] rounded-lg border border-zinc-800 p-3 flex flex-col h-[50vh] md:h-[73vh]">
          <div className="flex justify-between items-start text-2xl">
            <h2 className="text-base sm:text-lg font-medium capitalize mb-2 px-1">
              Todo
            </h2>
            <div className="h-7 w-7 flex justify-center items-center rounded-full cursor-pointer hover:bg-zinc-600 transition-all duration-200">
              <AiOutlinePlus className="mx-auto" />
            </div>
          </div>
          <div className="flex-1 bg-[#1a1a1a] rounded-md border border-zinc-800"></div>
        </div>

        <div className="board-child bg-[#121212] w-full md:w-[24%] rounded-lg border border-zinc-800 p-3 flex flex-col h-[50vh] md:h-[73vh]">
          <h2 className="text-base sm:text-lg font-medium capitalize mb-2 px-1">
            Pending
          </h2>
          <div className="flex-1 bg-[#1a1a1a] rounded-md border border-zinc-800"></div>
        </div>

        <div className="board-child bg-[#121212] w-full md:w-[24%] rounded-lg border border-zinc-800 p-3 flex flex-col h-[50vh] md:h-[73vh]">
          <h2 className="text-base sm:text-lg font-medium capitalize mb-2 px-1">
            Testing
          </h2>
          <div className="flex-1 bg-[#1a1a1a] rounded-md border border-zinc-800"></div>
        </div>

        <div className="board-child bg-[#121212] w-full md:w-[24%] rounded-lg border border-zinc-800 p-3 flex flex-col h-[50vh] md:h-[73vh]">
          <h2 className="text-base sm:text-lg font-medium capitalize mb-2 px-1">
            Completed
          </h2>
          <div className="flex-1 bg-[#1a1a1a] rounded-md border border-zinc-800"></div>
        </div>
      </div>
    </div>
  );
}

export default Board;
