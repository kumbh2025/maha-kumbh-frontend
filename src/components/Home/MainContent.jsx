import React from "react";
import UserForm from "./UserForm";
import ImageSection from "./ImageSection";

const MainContent = ({
  name,
  setName,
  uniqueName,
  setUniqueName,
  password,
  setPassword,
  handleFileChange,
  isLoading,
  handleSubmit,
  errorMessage,
}) => (
  <div className="flex flex-col lg:flex-row justify-center items-center mt-8 gap-8 lg:px-4 px-1">
    <ImageSection
      src="https://res.cloudinary.com/duqxqg7d0/image/upload/v1735590800/Bade_Hanuman_me481o.jpg"
      alt="Left Image"
    />
    <div className="w-full lg:w-2/5 px-2 flex justify-center">
      <UserForm
        name={name}
        setName={setName}
        uniqueName={uniqueName}
        setUniqueName={setUniqueName}
        password={password}
        setPassword={setPassword}
        handleFileChange={handleFileChange}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </div>
    <ImageSection
      src="https://res.cloudinary.com/duqxqg7d0/image/upload/v1735591729/sangam_people_us3oe4.jpg"
      alt="Right Image"
    />
  </div>
);

export default MainContent;
