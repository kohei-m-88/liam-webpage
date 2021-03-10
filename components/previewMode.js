export function PreviewMode() {
  return (
    <>
      <div className="flex justify-center">
        <p className="my-1 py-1 text-red-800 font-medium text-sm sm:text-base md:text-xl lg:text-2xl">
          Preview Mode
        </p>
        <a
          href="/api/exit-preview"
          className="underline hover:text-cyan duration-200 transition-colors"
        >
          EXIT PREVIEW MODE
        </a>
      </div>
    </>
  );
}
