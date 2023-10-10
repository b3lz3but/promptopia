// Importing the Image component from Next.js for optimized image rendering
import Image from "next/image";

// Defining a functional component named 'Loading'
const Loading = () => {
  // The component returns a div element with a loading image
  return (
    // A div that will take the full width of its parent and centers its child elements
    <div className='w-full flex-center'>
      <Image
        src='assets/icons/loader.svg'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

// Exporting the Loading component as the default export of this module
export default Loading;