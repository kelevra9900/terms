import Countdown,{CountdownProps} from 'react-countdown';
import {SeparatorIcon} from '@/components/icons/timer-separator';
import {twMerge} from 'tailwind-merge';
import classNames from 'classnames';

type CountdownTimerProps = {
  date: Date;
  title?: string;
  className?: string;
  onComplete?: CountdownProps['onComplete'];
  onStart?: CountdownProps['onStart'];
};

// Random component
const CompletionMessage = () => (
  <span className="text-sm">You are good to go!</span>
);

interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

interface RendererAdditionalProps {
  className?: string;
}

const renderer = (
  {days,hours,minutes,seconds,completed}: RendererProps,
  props: RendererAdditionalProps,
) => {
  if (completed) {
    // Render a completed state
    return <CompletionMessage />;
  } else {
    // Render a countdown
    return (
      <div
        className={twMerge(
          classNames(
            'flex gap-2 text-lg text-accent [&>p]:rounded [&>p]:bg-accent [&>p]:p-3 [&>p]:text-sm [&>p]:font-semibold [&>p]:text-white [&>span]:self-center',
            props?.className,
          ),
        )}
      >
        <p>{days}d</p>
        <span>
          <SeparatorIcon />
        </span>
        <p>{hours}h</p>
        <span>
          <SeparatorIcon />
        </span>
        <p>{minutes}m</p>
        <span>
          <SeparatorIcon />
        </span>
        <p>{seconds}s</p>
      </div>
    );
  }
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  date,
  title,
  className,
  onComplete,
  onStart,
}) => {
  return (
    <>
      {title ? (
        <h4 className="text-xl font-semibold text-muted-black">{title}</h4>
      ) : (
        ''
      )}
      <Countdown
        date={date}
        renderer={(props) => renderer(props,{className})}
        onComplete={onComplete}
        onStart={onStart}
      />
    </>
  );
};

export default CountdownTimer;
