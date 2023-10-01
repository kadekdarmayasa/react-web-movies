export default function SkeletonEffectLoading() {
  return (
    <div className="group card w-[96%] sm:w-[80%] md:w-72 xl:w-96 h-80 shadow-sm cursor-pointer hover:shadow-xl transition-all dark:bg-slate-800/50 dark:backdrop-blur-md overflow-hidden">
      <div className="animate-pulse w-full transition-all h-52 dark:bg-gray-500 bg-gray-200  block" />
      <div className="card-body animate-pulse">
        <h2 className="card-title h-3 dark:bg-gray-500 bg-gray-200 rounded-md"></h2>
        <h2 className="card-title h-3 dark:bg-gray-500 bg-gray-200 rounded-md"></h2>
        <div className="card-actions flex mt-4">
          <div className="badge w-20 dark:bg-gray-500 bg-gray-200  h-8 border-0"></div>
          <div className="badge w-20 dark:bg-gray-500 bg-gray-200 h-8 border-0"></div>
        </div>
      </div>
    </div>
  );
}
