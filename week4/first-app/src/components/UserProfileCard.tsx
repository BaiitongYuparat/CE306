import React from "react";
import SkillTag from "./SkillTag"; 

export interface UserData {
  id: string | number;
  name: string;
  avatarUrl?: string;
  email: string;
  isOnline: boolean;
  skills: Array<{ name: string; level?: "Beginner" | "Intermediate" | "Advanced" }>;
}

interface UserProfileCardProps {
    user: UserData;
    onViewDetails: (userId: string | number) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, onViewDetails }) => {
    return (
        <div style={{
            border: "1px solid #e0e0e0", 
            borderRadius: "12px",
            padding: "20px", 
            width: "280px", 
            marginBottom: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)", 
            textAlign: "left",
            fontFamily: "'Arial', sans-serif", 
        }}
        >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <img src={user.avatarUrl}
                    alt={user.name}
                    style={{
                        width: "60px", 
                        height: "60px",
                        borderRadius: "50%", 
                        objectFit: "cover", 
                        marginRight: "15px", 
                        border: "1px solid #eee", 
                    }}
                />
                <div>
                    <h3 style={{
                        margin: "0 0 5px", 
                        fontSize: "18px", 
                        color: "#333", 
                        fontWeight: 600,
                    }}>{user.name}
                    </h3>
                    <p style={{
                        margin: "0", 
                        color: "#777", 
                        fontSize: "12px", 
                    }}>
                        {user.email}
                    </p>
                </div>
            </div>

            <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                <span style={{
                    display: "inline-block",
                    width: "8px", 
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: user.isOnline ? "#4CAF50" : "#9E9E9E", 
                    marginRight: "8px", 
                }}></span>
                <span style={{
                    color: user.isOnline ? "#4CAF50" : "#9E9E9E", 
                    fontSize: "14px",
                    fontWeight: "500", 
                }}>
                   {user.isOnline ? "Online" : "Offline"}
                </span>
            </div>

            <p style={{
                margin: "0 0 10px", 
                fontSize: "14px",
                fontWeight: "600", 
                color: "#555",
            }}>
                Skills:
            </p>
            <div style={{
                marginBottom: "20px",
                display: "flex",
                flexWrap: "wrap", 
                gap: "8px", 
            }}>
                {user.skills.map((skill, index) => (
                    <SkillTag key={index} skillname={skill.name} level={skill.level} />
                ))}
            </div>

            <button onClick={() => onViewDetails(user.id)}
            style={{
                padding: "10px 15px", 
                backgroundColor: "#007bff", 
                color: "white",
                border: "none",
                borderRadius: "6px", 
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "600",
                width: "100%", 
                boxShadow: "0 2px 4px rgba(0,123,255,0.2)", 
                transition: "background-color 0.2s ease", 
            }}
            >
                View Details
            </button>
        </div>
    );
};

export default UserProfileCard;
