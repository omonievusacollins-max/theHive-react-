import {useRef} from 'react';
function useLongPress(callback, delay){
  const timer = useRef(null);
  const start = () => {
    timer.current = setTimeout(callback, delay)
  }
  const cancel = () => clearTimeout(timer.current);
  
  return {
    onPointerDown: start,
    onPointerUp: cancel,
    onPointerLeave: cancel,
    onPointerCancel: cancel
  }
}

export default useLongPress