import React from "react";
import UserProfileCard, { type UserData } from "./components/UserProfileCard";

const App: React.FC = () => {
  const users: UserData[] = [
    {
      id: 1,
      name: "Alice Wonderland",
      avatarUrl: "https://i.pinimg.com/1200x/72/a1/89/72a189c1b374656f6d22430c0ef354db.jpg",
      email: "alice@example.com",
      isOnline: true,
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "CSS", level: "Advanced" },
      ],
    },
    {
      id: 2,
      name: "Bob The Builder",
      avatarUrl: "https://i.pinimg.com/736x/dc/f5/bd/dcf5bd89be98c0150365bc021caa65f4.jpg",
      email: "bob.b@example.com",
      isOnline: false,
      skills: [
        { name: "Project Management", level: "Advanced" },
        { name: "Construction", level: "Beginner" },
      ],
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatarUrl: "https://i.pinimg.com/1200x/1c/2d/f5/1c2df5b43654b6ce820bea935a338968.jpg",
      email: "mike@example.com",
      isOnline: true,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Vue.js" },
      ],
    },
    {
      id: 3,
      name: "Max Lee",
      avatarUrl: "https://i.pinimg.com/736x/fc/d9/4d/fcd94d7b0c161d362752e63de8b4c289.jpg",
      email: "max.lee@example.com",
      isOnline: false,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Project Management", level: "Advanced"  },
      ],
    },
  ];

  const handleViewDetails = (userId: string | number) => {
    console.log("ดูรายละเอียดของ User ID:", userId);
  };

  return (
    <div style={{ 
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center", 
        }}>
      <h3 style={{ fontSize: "32px" }}>User Profile Card</h3>
      <div
        style={{ 
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center", 
        }}
      >
        {users.map((user) => (
          <UserProfileCard
            key={user.id}
            user={user}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
