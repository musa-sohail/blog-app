import Link from 'next/link';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export default async function BlogDetail({ params }) {
  const { id } = params;

  // Fetch the blog post from Firestore
  const docRef = doc(db, "blogs", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">Blog post not found</h1>
        </div>
      </div>
    );
  }

  const blog = docSnap.data();

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title || "Untitled Post"}</h1>
        <p className="text-lg mb-4">{blog.content || "No content available."}</p>
        <p className="text-gray-600 mb-2">Author: {blog.author || "Unknown"}</p>
        <Link href="/blog" className="inline-block mt-6 text-white bg-black border border-black py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
          Back to Blog List
        </Link>
      </div>
    </div>
  );
}
