import React, { useState } from 'react';

export interface Item {
    key: any,
    label: string,
    children: any,
}

const Tab = ({ defaultTab, onTabChange, items } : {
    defaultTab: number,
    onTabChange: (index: number, item: Item) => void,
    items: Item[]
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index: number, item: Item) => {
    setActiveTab(index);
    onTabChange(index, item);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-[#EEFDFF] rounded-lg flex justify-center">
        {items.map((item: Item, index: number) => (
          <button
            key={index}
            className={`rounded-lg m-2 grow ${
              activeTab === index
                ? 'bg-[#39CCDF] text-white'
                : ''
            } py-2 px-4`}
            onClick={() => handleTabClick(index, item)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="w-full mt-4">{items[activeTab].children}</div>
    </div>
  );
};

export default Tab;