import React from "react";

function Card({username="ZombieClub Token"}){
    return(
        <div><div className="bg-linear-to-r relative from-[#73e0a956] to-[#5B68DF] p-1 max-w-[330px] min-h-[525px] text-white rounded-xl  ">
      <div className="w-full min-h-full rounded-xl bg-[#ffffffdc] flex flex-col justify-center items-center p-2">
        <div className="relative">
          <img src="/src/assets/Rectangle3.png" />
          <div className="relative ">
            <img src="/src/assets/Ellipse1.png" className="absolute inset-[40%] -top-4" />
          </div>
        </div>
        <div className="relative  text-black pt-14 pb-5">
          <div className="flex justify-center items-start  text-2xl">
            {username}{" "}
            <img src="/src/assets/Vector.png" width="30" height="30" className="mx-2" />
          </div>
          <p className="text-[14px] font-light font-mono">
            Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is
            unique and resides on the Ethereum blockchain. Your Zombie Lab Club
            NFT will double as your club membership.
          </p>
        </div>
      </div>
    </div>
    
    </div>
    )
}

export default Card;