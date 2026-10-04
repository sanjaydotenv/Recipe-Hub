import React, { useRef, useState } from "react";
import { FiArrowLeft, FiUploadCloud, FiImage, FiPlus } from "react-icons/fi";

import DashboardAside from "../components/DashboardAside";
import { useFoodManageHook } from "../../hooks/foodManageHook";

const AddFood = () => {
  const [foodData, setFoodData] = useState({});
  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const imgRef = useRef();

  const { addFoodCall } = useFoodManageHook();

  const imgClick = () => {
    imgRef.current.click();
  };

  const selectedImage = (e) => {
    const blob = URL.createObjectURL(e.target.files[0]);
    setImgPreview(blob);
    setImgFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  const handleFoodDataSubmit = () => {
    const obj = { ...foodData, foodImage: imgFile };
    addFoodCall(obj)
  };

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex">
      <main className="min-w-0 flex-1 px-8 py-7">
        {/* ===================================================
            HEADER
        ==================================================== */}
        <div className="mb-8 flex items-center justify-between">
          {/* LEFT HEADER */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2e8e4] bg-white text-[#66736c] transition hover:bg-[#f1f5f3]"
            >
              <FiArrowLeft size={19} />
            </button>

            <div>
              <p className="text-[13px] font-medium text-[#8a9791]">Products</p>

              <h1 className="mt-1 text-2xl font-bold text-[#111815]">
                Add New Food
              </h1>
            </div>
          </div>

          {/* RIGHT HEADER */}
          <div className="text-right">
            <p className="text-xs text-[#8a9791]">Seller Studio</p>

            <p className="mt-1 text-sm font-semibold text-[#17221d]">
              Add something delicious 🍽️
            </p>
          </div>
        </div>

        {/* ===================================================
            CONTENT
        ==================================================== */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* =================================================
              LEFT COLUMN
          ================================================== */}
          <div className="space-y-6">
            {/* ===============================================
                FOOD INFORMATION
            ================================================ */}
            <form action="">
              <div className="rounded-2xl border border-[#e2e8e4] bg-white p-7">
                <div className="mb-7">
                  <h2 className="text-lg font-bold text-[#111815]">
                    Food Information
                  </h2>

                  <p className="mt-1 text-sm text-[#8a9791]">
                    Add the basic information about your food item.
                  </p>
                </div>

                {/* FOOD TITLE */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-semibold text-[#27332e]">
                    Food Title
                  </label>

                  <input
                    onInput={handleChange}
                    name="foodTitle"
                    type="text"
                    placeholder="e.g. Peri Peri Pizza"
                    className="h-12 w-full rounded-xl border border-[#dfe6e2] bg-[#fbfcfb] px-4 text-sm text-[#17221d] outline-none placeholder:text-[#a5afaa] transition focus:border-[#16a765] focus:ring-4 focus:ring-[#16a765]/10"
                  />
                </div>

                {/* DESCRIPTION */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-[#27332e]">
                      Food Description
                    </label>

                    <span className="text-xs text-[#a0aaa5]">0/500</span>
                  </div>

                  <textarea
                    onInput={handleChange}
                    name="foodDescription"
                    rows={6}
                    placeholder="Describe your food, ingredients, taste, portion size..."
                    className="w-full resize-none rounded-xl border border-[#dfe6e2] bg-[#fbfcfb] px-4 py-3 text-sm leading-6 text-[#17221d] outline-none placeholder:text-[#a5afaa] transition focus:border-[#16a765] focus:ring-4 focus:ring-[#16a765]/10"
                  />
                </div>

                {/* PRICE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#27332e]">
                    Food Price
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-[#16a765]">
                      ₹
                    </span>

                    <input
                      onInput={handleChange}
                      name="foodPrice"
                      type="number"
                      placeholder="149"
                      className="h-12 w-full rounded-xl border border-[#dfe6e2] bg-[#fbfcfb] pl-10 pr-4 text-sm text-[#17221d] outline-none placeholder:text-[#a5afaa] transition focus:border-[#16a765] focus:ring-4 focus:ring-[#16a765]/10"
                    />
                  </div>

                  <p className="mt-2 text-xs text-[#98a39d]">
                    Enter the selling price of this food item.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e2e8e4] bg-white p-7">
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-[#111815]">
                    Food Image
                  </h2>

                  <p className="mt-1 text-sm text-[#8a9791]">
                    Upload a clear and attractive image of your food.
                  </p>
                </div>

                {/* UPLOAD BOX */}
                <div className="flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#cfdad4] bg-[#fafcfb] transition hover:border-[#16a765] hover:bg-[#f3faf6]">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e9f8f0] text-[#16a765]">
                    <FiUploadCloud size={29} />
                  </div>

                  <input
                    onChange={selectedImage}
                    ref={imgRef}
                    name="foodImage"
                    hidden
                    type="file"
                  />

                  <h3 className="text-sm font-bold text-[#27332e]">
                    Upload food image
                  </h3>

                  <p className="mt-2 text-xs text-[#98a39d]">
                    PNG, JPG or WEBP · Max 5MB
                  </p>

                  <button
                    onClick={imgClick}
                    type="button"
                    className="mt-5 rounded-lg bg-[#16a765] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#119456]"
                  >
                    Choose Image
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}
          <div className="space-y-6">
            {/* ===============================================
      FOOD PREVIEW
  ================================================ */}
            <div className="overflow-hidden rounded-2xl border border-[#e2e8e4] bg-white">
              {/* PREVIEW HEADER */}
              <div className="border-b border-[#edf0ee] px-6 py-5">
                <h2 className="font-bold text-[#111815]">Food Preview</h2>

                <p className="mt-1 text-xs text-[#8a9791]">
                  Preview of your food item.
                </p>
              </div>

              {/* PREVIEW IMAGE */}
              <div className="h-[240px] w-full overflow-hidden bg-[#eef3f0]">
                {imgPreview ? (
                  <img
                    src={imgPreview}
                    alt={foodData.foodTitle || "Food preview"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center text-[#a2aca7]">
                    <FiImage size={42} strokeWidth={1.5} />

                    <p className="mt-3 text-xs">Food image preview</p>
                  </div>
                )}
              </div>

              {/* PREVIEW DETAILS */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="truncate font-bold text-[#18221e]">
                      {foodData.foodTitle ? (
                        foodData.foodTitle
                      ) : (
                        <i className="text-[#18221eb1]">Title</i>
                      )}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#8b9690]">
                      {foodData.foodDescription ? (
                        foodData.foodDescription
                      ) : (
                        <i className="text-[#8b9690be]">
                          Your food description will appear here. Add a
                          delicious description for your customers.
                        </i>
                      )}
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-lg font-bold text-[#16a765]">
                    {foodData.foodPrice ? (
                      `₹${foodData.foodPrice}`
                    ) : (
                      <i className="text-[#16a766a4]">₹149</i>
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* ===============================================
      PUBLISH CARD
  ================================================ */}
            <div className="rounded-2xl border border-[#e2e8e4] bg-white p-6">
              <div className="mb-5">
                <h3 className="font-bold text-[#111815]">Ready to publish?</h3>

                <p className="mt-1 text-xs leading-5 text-[#8a9791]">
                  Make sure all information is correct before adding this food
                  to your store.
                </p>
              </div>

              <button
                onClick={handleFoodDataSubmit}
                type="button"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#16a765] text-sm font-bold text-white shadow-lg shadow-[#16a765]/20 transition hover:bg-[#119456] active:scale-[0.98]"
              >
                <FiPlus size={18} />
                Add Food
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddFood;
