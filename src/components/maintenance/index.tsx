/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import {twMerge} from 'tailwind-merge';
import classNames from 'classnames';



interface MaintenanceModeProps {
  data: {
    newsLetterTitle?: string;
    newsLetterDescription?: string;
    aboutUsTitle?: string;
    aboutUsDescription?: string;
    contactUsTitle?: string;
    contactDetails?: {
      [key: string]: any;
    };
    title: string;
    description: string;
    buttonTitleOne?: string;
    buttonTitleTwo?: string;
    isOverlayColor?: string;
    overlayColorRange?: string;
    overlayColor?: string;
    image: any;
  };
  renderCountDown: React.ReactNode;
  className?: string;
  showLogo?: boolean;
}

const MaintenanceMode = ({
  data,
  renderCountDown,
  className,
}: MaintenanceModeProps) => {


  return (
    <div
      className={twMerge(
        classNames(
          'relative h-screen min-h-[43.75rem] w-full text-center',
          className,
        ),
      )}
    >
      <div className="relative z-20 mx-auto h-[calc(100%-70px)] max-w-7xl px-8">
        <div className="relative mt-8 lg:mt-16">
          <div>
            <h1 className="mb-4 text-xl font-bold tracking-tight text-black lg:mb-8 lg:text-6xl">
              Maintenance Mode
            </h1>
            <p className="m-0 mx-auto max-w-xl text-base leading-8 text-black lg:text-lg">
              We are currently under maintenance. We will be back soon. Thank you for your patience.
            </p>
            {renderCountDown}

          </div>
        </div>
      </div>
      {data?.image && data?.image?.original ? (
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-no-repeat">
          <Image
            src={data?.image?.original}
            alt="maintenance image"
            fill
            className="object-contain object-bottom"
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default MaintenanceMode;
