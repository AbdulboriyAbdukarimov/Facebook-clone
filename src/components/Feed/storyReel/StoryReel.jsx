import React from "react";
import Story from "./Story/Story";
import "./storyReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://pngbasket.com/wp-content/uploads/2021/08/board-2Artboard-1-copy-10_7-1.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rE9tj8eybrz7hhlY8fL_fGWGboOarD6ubU85ezClnsK5NPO-C5A26OMjHUpo-8jiKlw&usqp=CAU"
        title="Anonymus"
      />
      <Story
        image="https://i.pinimg.com/236x/6c/86/2d/6c862d23bec853bb06f1bbc945ecb867.jpg"
        profileSrc="https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg"
        title="Robert"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_k5i7U-ED9mUk2ZoYns3h15oSv6eZZRGzw&usqp=CAU"
        profileSrc="https://img.freepik.com/premium-vector/man-avatar-portrait-of-a-man-minimalist-flat-illustration_186332-435.jpg?w=2000"
        title="Mark"
      />
      <Story
        image="https://i.pinimg.com/originals/35/b2/fd/35b2fdeae79abd8c3e4d000c8e702f54.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wqnv8pPMltET_mI0mLRq0hxqCGMvlP1pTQvJPRxBvPVMO3myC_FJ1mFN-UYPqTxbdLU&usqp=CAU"
        title="John"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwKKTPtlpQ8LSoobtAjSU33rf5_CZpfdcVQ&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnjJM6pP2--WL2FcbdZotGU77Kc5sbapMyLCN2G3D02i9_aU9In09WHyX8TG3jvkbSxs&usqp=CAU"
        title="Steve"
      />
    </div>
  );
};

export default StoryReel;
