import { useCallback, useState } from 'react'

const useToggle = () => {
    const [state, setState] = useState(false);

    const toggle = useCallback(() => setState(!state));
    const onOpen = useCallback(() => setState(true), []);
    const onClose = useCallback(() => setState(false), []);

    return { state, toggle, onOpen, onClose };
}

export default useToggle