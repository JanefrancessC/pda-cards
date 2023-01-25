import React from "react";
//child component
const ProfileCard = ({ title, handle, imageSrc, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageSrc} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">Title is {title}</p>
          <p className="subtitle is-6">Twitter handle is {handle}</p>
        </div>
        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

// const ProfileCard = (props) => {
//   return (
//     <div>
//       <div>Title is {props.title}</div>
//       <div>Twitter handle is {props.handle}</div>
//     </div>
//   );
// };

export default ProfileCard;
