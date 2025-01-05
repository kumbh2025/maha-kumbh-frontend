import React from "react";
import UserForm from "./UserForm";
import SpecialBathDate from "./SpecialBathDate";
import OfficialWebsite from "./OfficialWebsite";

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
  <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 mt-4 px-0">
    {/* UserForm: Full screen on phones, auto height based on content */}
    <div className="order-1 lg:order-2 lg:col-span-1 w-full flex items-center justify-center px-0 h-auto">
      <div className="w-full max-w-md">
        <h2 className="text-xl font-extrabold text-orange-800 uppercase tracking-wider text-center mb-4 lg:mb-6 lg:block hidden">
          User Form
        </h2>
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
    </div>

    {/* Official Website: Hidden on phones */}
    <div className="hidden lg:block order-2 lg:order-1 lg:col-span-1 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-extrabold text-orange-800 uppercase tracking-wider text-center mb-4">
        Official Websites
      </h2>
      <OfficialWebsite />
    </div>

    {/* Bathing Dates: Hidden on phones */}
    <div className="hidden lg:block order-3 lg:order-3 lg:col-span-1 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-200 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-extrabold text-orange-800 uppercase tracking-wider text-center mb-4">
        Bathing Dates
      </h2>
      <SpecialBathDate occasion="PAUSH Purnima" date="13 JANUARY 2025" />
      <SpecialBathDate occasion="MAKAR SANKRANTI" date="14 JANUARY 2025" />
      <SpecialBathDate occasion="MAUNI AMAVASYA" date="29 JANUARY 2025" />
      <SpecialBathDate occasion="BASANT PANCHAMI" date="03 FEBRUARY 2025" />
      <SpecialBathDate occasion="MAGHI Purnima" date="12 FEBRUARY 2025" />
      <SpecialBathDate occasion="MAHA SHIVARATRI" date="26 FEBRUARY 2025" />
    </div>
  </div>
);

export default MainContent;
