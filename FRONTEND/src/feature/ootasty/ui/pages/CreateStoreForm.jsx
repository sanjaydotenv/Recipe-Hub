import React, { useState } from "react";

const categories = [
  { id: 1, name: "Pizza", emoji: "🍕" },
  { id: 2, name: "Burgers", emoji: "🍔" },
  { id: 3, name: "Sandwiches", emoji: "🥪" },
  { id: 4, name: "Fast Food", emoji: "🍟" },
  { id: 5, name: "Breakfast", emoji: "🥞" },
  { id: 6, name: "Chinese", emoji: "🍜" },
  { id: 7, name: "Indian", emoji: "🍛" },
  { id: 8, name: "South Indian", emoji: "🍱" },
  { id: 9, name: "Desserts", emoji: "🍰" },
  { id: 10, name: "Healthy", emoji: "🥗" },
  { id: 11, name: "Italian", emoji: "🍝" },
  { id: 12, name: "Mexican", emoji: "🌮" },
  { id: 13, name: "Beverages", emoji: "☕" },
  { id: 14, name: "Ice Cream", emoji: "🍦" },
];

const CreateStoreForm = () => {
  // Selected categories ki IDs yahan store hongi
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) => {
      const alreadySelected = prev.some((item) => item.id === category.id);

      if (alreadySelected) {
        return prev.filter((item) => item.id !== category.id);
      }

      return [...prev, category];
    });
  };

  const handleInputValue = (val) => {
    setInputValue(val.target.value);
  };

  const handleCreateStoreBtn = () => {
    console.log(selectedCategories, inputValue);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f3] flex items-center justify-center p-5">
      <div className="relative w-full max-w-[900px] overflow-hidden rounded-[30px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.10)]">
        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#13a854]" />

        <div className="absolute -bottom-32 -left-28 h-64 w-64 rounded-full bg-[#e9f7ee]" />

        {/* Content */}
        <div className="relative z-10 px-7 py-7 sm:px-12 sm:py-9">
          {/* Header */}
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#13a854] text-lg text-white">
                🍴
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight text-[#101412]">
                  Tasty
                </h1>

                <p className="text-[10px] font-medium uppercase tracking-[2px] text-gray-400">
                  Seller Studio
                </p>
              </div>
            </div>

            <div className="hidden rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-xs font-medium text-gray-500 backdrop-blur sm:block">
              Create your store
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8 max-w-xl">
            <p className="mb-2 text-sm font-semibold text-[#13a854]">
              LET'S GET STARTED
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#111613] sm:text-4xl">
              Create your food store
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Give your store a name and choose the categories that describe
              your food.
            </p>
          </div>

          {/* Store name */}
          <div className="mb-9">
            <label className="mb-2.5 block text-sm font-semibold text-[#151a17]">
              Store name
            </label>

            <div className="group flex h-[58px] items-center rounded-2xl border border-gray-200 bg-[#f8f9f8] px-4 transition-all focus-within:border-[#13a854] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#13a854]/10">
              <svg
                className="mr-3 h-5 w-5 text-gray-400 group-focus-within:text-[#13a854]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 9h.01M15 9h.01"
                />
              </svg>

              <input
                onChange={handleInputValue}
                type="text"
                placeholder="Enter your store name"
                className="h-full w-full bg-transparent text-[15px] font-medium text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <label className="block text-sm font-semibold text-[#151a17]">
                  Food category
                </label>

                <p className="mt-1 text-xs text-gray-400">
                  Select categories for your store
                </p>
              </div>

              <span className="hidden text-xs font-medium text-gray-400 sm:block">
                {categories.length} categories
              </span>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => {
                const isActive = selectedCategories.some(
                  (item) => item.id === category.id,
                );

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className={`group flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 ${
                      isActive
                        ? "border-[#13a854] bg-[#13a854] text-white shadow-md shadow-[#13a854]/20"
                        : "border-gray-200 bg-white text-gray-700 hover:border-[#13a854] hover:bg-[#effaf3] hover:text-[#118c47] hover:shadow-md"
                    }`}
                  >
                    <span className="text-base leading-none">
                      {category.emoji}
                    </span>

                    <span>{category.name}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px]">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Debug / figure out selected IDs */}
          </div>

          {/* Bottom */}
          <div className="mt-10 flex flex-col-reverse gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-gray-400">
              You can customize your store later.
            </p>

            <button
              onClick={handleCreateStoreBtn}
              type="button"
              className="group flex h-12 items-center justify-center gap-3 rounded-2xl bg-[#13a854] px-7 text-sm font-bold text-white shadow-[0_10px_25px_rgba(19,168,84,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f974a] hover:shadow-[0_14px_30px_rgba(19,168,84,0.28)] active:translate-y-0"
            >
              <span>Continue</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStoreForm;
