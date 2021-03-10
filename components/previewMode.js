export function PreviewMode() {
  return (
    <>
      <div className="flex justify-center">
        <p className="my-1 py-1 text-red-600 font-medium text-sm sm:text-base md:text-xl lg:text-2xl">
          Preview Mode
        </p>
        <a
          href="/api/exitPreview"
          className="my-1 ml-3 py-1 text-green-400 hover:text-cyan font-medium text-sm sm:text-base md:text-xl lg:text-2xl  duration-200 transition-colors"
        >
          EXIT PREVIEW MODE
        </a>
      </div>
    </>
  );
}
