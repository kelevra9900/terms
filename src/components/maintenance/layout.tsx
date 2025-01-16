import MaintenanceMode from '@/components/maintenance';

import CountdownTimer from '@/components/ui/countdown-timer/maintenance';


export const isInArray = (array: Date[],value: Date) => {
  return !!array?.find((item) => {
    return item?.getDate() == value?.getDate();
  });
};

const Maintenance = () => {
  return (
    <main >
      <MaintenanceMode
        data={{
          aboutUsTitle: 'About Us',
          aboutUsDescription: '',
          contactUsTitle: '',
          contactDetails: [],
          title: '',
          description: '',
          buttonTitleOne: '',
          buttonTitleTwo: '',
          image: '',
          isOverlayColor: '',
          overlayColorRange: '',
        }}
        renderCountDown={
          <div className="mt-7 lg:mt-14">
            <CountdownTimer
              date={
                new Date(new Date().setMonth(new Date().getMonth() + 3))
              }
              onComplete={() => { }}
            />
          </div>
        }
      />
    </main>
  );
};

export default Maintenance;
