import React from "react";
import Image from "next/image";

const LOCAL_STRING_CONSTANTS = {
  head1: "Create & Share",
  head2: "Your Code easily",
};

const Header = () => {
  return (
    <section className='flex flex-col gap-4'>
      <Image
        src='/NoteCodeLogo.svg'
        alt='NoteCode logo'
        width={120}
        height={120}
      />
      <p className='text-3xl text-black'>{LOCAL_STRING_CONSTANTS.head1}</p>
      <p className='text-4xl text-black'>{LOCAL_STRING_CONSTANTS.head2}</p>
    </section>
  );
};
export default Header;
