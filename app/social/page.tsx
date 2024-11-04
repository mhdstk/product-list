"use client"
import  React,{ useState } from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const youtubePosts = [
  {
    id: 1,
    title: "YouTube Post 1",
    thumbnail: "https://via.placeholder.com/150", // Replace with actual thumbnail URL
    description: "This is a description of YouTube Post 1.",
    link: "https://youtube.com",
  },
  {
    id: 2,
    title: "YouTube Post 2",
    thumbnail: "https://via.placeholder.com/150",
    description: "This is a description of YouTube Post 2.",
    link: "https://youtube.com",
  },
];

const instagramPosts = [
  {
    id: 1,
    title: "Instagram Post 1",
    thumbnail: "https://via.placeholder.com/150", // Replace with actual thumbnail URL
    description: "This is a description of Instagram Post 1.",
    link: "https://instagram.com",
  },
  {
    id: 2,
    title: "Instagram Post 2",
    thumbnail: "https://via.placeholder.com/150",
    description: "This is a description of Instagram Post 2.",
    link: "https://instagram.com",
  },
];

export default function SocialPosts() {
  const [activeTab, setActiveTab] = useState<"youtube" | "instagram">("youtube");

  const posts = activeTab === "youtube" ? youtubePosts : instagramPosts;

  return (
    <div className="bg-gray-50 p-6 w-full min-h-screen mx-auto">
      <div className="flex justify-center mb-6">
        {/* Tabs */}
        <button
          onClick={() => setActiveTab("youtube")}
          className={`px-4 py-2 font-semibold text-lg rounded-t-lg ${
            activeTab === "youtube" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
         <YouTubeIcon /> YouTube
        </button>
        <button
          onClick={() => setActiveTab("instagram")}
          className={`px-4 py-2 font-semibold text-lg rounded-t-lg ${
            activeTab === "instagram" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          <InstagramIcon /> Instagram
        </button>
      </div>

      {/* Posts List */}
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            key={post.id}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">{post.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
