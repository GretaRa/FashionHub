const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-36 w-36"></div>
    </div>
  );
};

export default LoadingSpinner;