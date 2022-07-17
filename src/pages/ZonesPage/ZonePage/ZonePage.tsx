import { NavLink, Outlet } from 'react-router-dom';

import { ButtonGroup } from 'components';

export function ZonePage() {
  return (
    <div>
      <ButtonGroup>
        <NavLink to="overview">Overview</NavLink>
        <NavLink to="peers">Peers</NavLink>
        <NavLink to="nodes">Nodes</NavLink>
        <NavLink to="pools">Pools</NavLink>
      </ButtonGroup>

      <Outlet />
    </div>
  );
}
