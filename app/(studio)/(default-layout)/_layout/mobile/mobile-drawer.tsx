import { MobileBottomNavigation } from './mobile-bottom-navigation';
import { MobileNavigationMenu } from './mobile-navigation-menu';
import { useStudioContext } from '../../../_context/studio.context';

export const MobileDrawer = () => {
  const { isMainContentFullScreen } = useStudioContext();

  return (
    <div
      className={`flex h-full flex-col items-center ${
        isMainContentFullScreen ? 'bg-transparent' : 'bg-white'
      } `}
    >
      <MobileNavigationMenu />
      <MobileBottomNavigation />
    </div>
  );
};
