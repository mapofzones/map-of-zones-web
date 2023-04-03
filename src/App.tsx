import './App.scss';

import { AppRouting } from 'AppRouting';
import { Analytics } from 'components';
import LazyModulesPreloading from 'lazyModules/LazyModulesPreloading';
import { MaintenancePage } from 'pages/MaintenancePage';

function App() {
  const maintenance = process.env.REACT_APP_MAINTENANCE_MODE?.toUpperCase() === 'TRUE';

  return (
    <>
      <Analytics />
      {maintenance && <MaintenancePage />}
      {!maintenance && (
        <>
          <AppRouting />
          <LazyModulesPreloading />
        </>
      )}
    </>
  );
}

export default App;
