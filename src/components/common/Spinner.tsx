const Spinner = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-red-default border-t-transparent rounded-full animate-spin" />
      </div>
    </main>
  );
};

export default Spinner;
