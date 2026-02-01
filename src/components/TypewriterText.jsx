import { useTypewriter } from '../hooks/useTypewriter';

export default function TypewriterText({
  text,
  speed = 30,
  className = '',
  onComplete,
  showCursor = true,
}) {
  const { displayedText, isComplete, skip } = useTypewriter(text, speed);

  if (isComplete && onComplete) {
    onComplete();
  }

  return (
    <span
      className={`${className} ${!isComplete && showCursor ? 'cursor-blink' : ''}`}
      onClick={!isComplete ? skip : undefined}
    >
      {displayedText}
    </span>
  );
}
