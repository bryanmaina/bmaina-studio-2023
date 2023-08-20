import {atom} from 'recoil';

type ControlMode = 'translate' | 'rotate' | 'scale';

interface ControlsState {
    current: null | string;
    mode: ControlMode;
}

export const controlsState = atom<ControlsState>({
    key: 'controls state',
    default: {
        current: null,
        mode: 'translate'
    }
});
