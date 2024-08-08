import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default async function BlogList() {
  // Fetch blog posts from Firestore
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return (
    <div className=" min-h-screen p-6 sm:p-8 lg:p-12">
      <h1 className="text-4xl font-bold text-center mb-8">Blog List</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{blog.title || "Untitled Post"}</h2>
            <p className="text-gray-700 mb-4">{blog.content?.slice(0, 150) + '...' || "No content available."}</p>
            <Link href={`/blog/${blog.id}`} className="inline-block text-white bg-black border border-black py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
