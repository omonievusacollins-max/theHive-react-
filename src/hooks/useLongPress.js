import {useRef} from 'react';
function useLongPress(callback, delay){
  const timer = useRef(null);
  
  const start = (e) => {
    if(e.target.closest('.no-hold')) return // ignore presses on excluded children
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