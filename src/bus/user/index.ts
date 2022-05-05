// Bus
import { useTogglersRedux } from '../client/togglers';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useUserSaga } from './saga';

export const useUser = () => {
    const { userRegister, refreshUser, clearUser } = useUserSaga();
    const user = useSelector((state) => state.user.user); // Add post to ./src/init/redux/index.ts
    const { resetTogglersToInitial } = useTogglersRedux();

    return {
        user,
        userRegister,
        refreshUser,
        clearUser,
        resetTogglersToInitial,
    };
};
