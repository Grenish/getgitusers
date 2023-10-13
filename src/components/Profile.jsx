import React, { useState, useEffect } from "react";
import {
  coverImage1,
  coverImage2,
  coverImage3,
  coverImage4,
  coverImage5,
  coverImage6,
  coverImage7,
  coverImage8,
  coverImage9,
  coverImage10,
  coverImage11,
  coverImage12,
} from "../assets";

const Profile = ({ profileData }) => {
  const [coverImage, setCoverImage] = useState("");

  const handleCoverImage = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    switch (randomNumber) {
      case 1:
        setCoverImage(coverImage1);
        break;
      case 2:
        setCoverImage(coverImage2);
        break;
      case 3:
        setCoverImage(coverImage3);
        break;
      case 4:
        setCoverImage(coverImage4);
        break;
      case 5:
        setCoverImage(coverImage5);
        break;
      case 6:
        setCoverImage(coverImage6);
        break;
      case 7:
        setCoverImage(coverImage7);
        break;
      case 8:
        setCoverImage(coverImage8);
        break;
      case 9:
        setCoverImage(coverImage9);
        break;
      case 10:
        setCoverImage(coverImage10);
        break;
      case 11:
        setCoverImage(coverImage11);
        break;
      case 12:
        setCoverImage(coverImage12);
        break;
      default:
        setCoverImage(coverImage1);
    }
  };

  useEffect(() => {
    handleCoverImage();
  }, [profileData]);

  const formatCount = (count) => {
    if (count < 1000) return count;
    else if (count < 1000000) return `${(count / 1000).toFixed(1)}k`;
    else return `${(count / 1000000).toFixed(1)}m`;
  };

  return (
    <div className="mt-9 px-2 md:px-6 lg:px-0">
      <div
        className="text-gitText flex justify-center items-center"
        id="profile-card"
      >
        <div className="w-full sm:w-3/4 lg:w-1/2 overflow-hidden bg-gitSecondaryBlack rounded-xl">
          <div className="relative border-b-[5px] border-neutral">
            <img
              src={coverImage}
              alt="cover image"
              className="h-[20vh] md:h-[30vh] lg:h-[25vh] w-full object-cover"
            />
            <div className="absolute w-full bottom-[-70px] flex flex-col justify-center items-start text-start p-2">
              <img
                src={profileData.avatar_url}
                alt="profile image"
                className="w-[130px] md:w-[150px] lg:w-[190px] h-[130px] md:h-[150px] lg:h-[190px] rounded-full object-cover border-4 border-neutral"
              />
            </div>
          </div>
          <div className="mt-16 p-4 flex flex-col lg:flex-row justify-between">
            <div className="px-4 lg:w-1/2">
              <h2 className="text-gitText text-xl lg:text-2xl font-pop font-bold">
                {profileData.name}
              </h2>
              <p className="mt-[-1px] text-gitSecondaryText text-md">
                {profileData.login}
              </p>
              <p className="text-xs mt-2 w-full lg:w-[250px]">
                {profileData.bio}
              </p>
              <div className="mt-5">
                <button className="w-full lg:w-auto">
                  <a
                    href={profileData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit GitHub
                  </a>
                </button>
              </div>
            </div>
            <div className="mt-5 lg:mt-0 flex items-center justify-center space-x-3 lg:w-1/2">
              <span>
                <h2 className="text-gitText font-bold text-center text-xl lg:text-2xl font-pop">
                  {formatCount(profileData.followers)}
                </h2>
                <p className="font-pop font-light text-center">Followers</p>
              </span>
              <span>
                <h2 className="text-gitText font-bold text-center text-xl lg:text-2xl font-pop">
                  {formatCount(profileData.following)}
                </h2>
                <p className="font-pop font-light text-center">Following</p>
              </span>
              <span>
                <h2 className="text-gitText font-bold text-center text-xl lg:text-2xl font-pop">
                  {profileData.public_repos}
                </h2>
                <p className="font-pop font-light text-center">Repositories</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
