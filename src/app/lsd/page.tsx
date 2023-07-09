'use client'

import Tab, { Item } from '../components/tabs'

export default function LSDPage() {


    const stakeUI = () => {
        return (<div className="flex flex-col mt-9">
            <div>Amount to Stake:</div>
            <input className="w-full h-12 mt-4 border border-black border-opacity-20 rounded-lg outline-0 p-4 " />

            <div className='text-[#9999] mt-8'>You will get:</div>
            <div className="w-full mt-4 flex justify-between">
                <span>ltATOM</span>
                <span>0</span>
            </div>

            <div className="w-full mt-8 rounded-lg bg-[#39CCDF] flex items-center justify-center text-white p-5">
                    Stake
            </div>
        </div>)
    }

    const unStakeUI = () => {
        return (<div>unstake</div>)
    }

    const tabs: Item[] = [
        {
          key: '1',
          label: `Stake`,
          children: stakeUI(),
        },
        {
          key: '2',
          label: `Unstake`,
          children: unStakeUI(),
        }
      ];

    const onTabChange = (index: number, item: Item) => {

    }

    return (<div className="w-full h-full flex justify-center">
        <div className=" w-2/5 min-h-[50%] mt-16 bg-white rounded-lg pt-14 pb-14 pl-16 pr-16">

            <Tab items={tabs} defaultTab={0} onTabChange={() => onTabChange} ></Tab>
        </div>
    </div>)
}