export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Welcome to Our Blog
        </h1>
        <p className="mt-2 text-lg text-gray-700 leading-relaxed text-center">
          There are static pages like Home, About, Contact which are currently empty.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">
          The blog page displays a list of blog posts. Currently, there are limited blogs in Firestore. A screenshot with the link will be attached.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">
          From the blog page, you can navigate to the blog details page, and from there, you can return to the blog listing.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">
          Finally, the API data page shows data fetched from a dummy API created with Next.js using API folder.
        </p>
        <p className="mt-6 text-lg text-gray-900 font-semibold text-center">
          Created By Muhammad Musa
        </p>
      </div>
    </main>
  );
}
