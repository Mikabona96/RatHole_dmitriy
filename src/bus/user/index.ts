// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useUserSaga } from './saga';

export const useUser = () => {
    const { userRegister, refreshUser, clearUser } = useUserSaga();
    const user = useSelector((state) => state.user.user); // Add post to ./src/init/redux/index.ts

    return {
        user,
        userRegister,
        refreshUser,
        clearUser,
    };
};
