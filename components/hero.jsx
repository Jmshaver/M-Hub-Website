

export default function Hero({ children, title }) {
  return (
    <div className="md:text-left hero pb-8">
      <div className="container mx-auto">
        {title ? (
          <h1 className="mb-2 md:mb-5 lg:text-5xl text-4xl font-bold text-center">
            {title}
          </h1>
        ) : null}
        {children}
      </div>
    </div>
  );
}
