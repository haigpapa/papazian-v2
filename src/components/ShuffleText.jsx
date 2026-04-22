import { useEffect, useRef, useState } from 'react';

function shuffleArray(values) {
  const clone = [...values];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function mutateText(target, frame) {
  const letters = target.split('');
  const alphaIndices = letters
    .map((char, index) => (/[a-z]/i.test(char) ? index : -1))
    .filter((index) => index >= 0);

  if (!alphaIndices.length) return target;

  const alphaChars = alphaIndices.map((index) => letters[index]);
  const shuffled = shuffleArray(alphaChars);

  if (frame <= 8) {
    const preview = [...letters];
    alphaIndices.forEach((index, alphaIndex) => {
      preview[index] = shuffled[alphaIndex];
    });
    return preview.join('');
  }

  const settleProgress = Math.min(1, (frame - 8) / 8);
  const revealCount = Math.floor(alphaIndices.length * settleProgress);
  const settledOrder = shuffleArray(alphaIndices);
  const settledSet = new Set(settledOrder.slice(0, revealCount));
  const preview = [...letters];

  alphaIndices.forEach((index, alphaIndex) => {
    preview[index] = settledSet.has(index) ? letters[index] : shuffled[alphaIndex];
  });

  return preview.join('');
}

export default function ShuffleText({ text, className = '', trigger = 'hover', onClick }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);


  const start = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    frameRef.current = 0;
    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      if (frameRef.current > 16) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplay(text);
        return;
      }
      setDisplay(mutateText(text, frameRef.current));
    }, 32);
  };

  const handlers =
    trigger === 'click'
      ? {
          onClick: (event) => {
            start();
            onClick?.(event);
          },
        }
      : {
          onMouseEnter: start,
          onFocus: start,
          onClick,
        };

  return (
    <span className={className} {...handlers}>
      {display}
    </span>
  );
}
