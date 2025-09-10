import React from 'react';

interface SkillTagProps {
  skillname: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

const ColorByLevel = (level?: string) => {
  if (level === "Beginner")
    return "green";
  if (level === "Intermediate") 
    return "orange";
  if (level === "Advanced") 
    return "pink";
  return "gray";
};

const SkillTag: React.FC<SkillTagProps> = ({ skillname, level }) => {
  const backgroundColor = ColorByLevel(level);

  return (
    <div style={{
      backgroundColor,
      color: "white",
      padding: "6px 10px",
      borderRadius: "12px",
      marginRight: "6px",
      fontSize: "14px",
    }}
    >
     {skillname} {level}
    </div>
  );
};

export default SkillTag;