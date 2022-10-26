import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import styled from 'styled-components';

const Button = styled.button`
  width: 10px;
`;

const Navbar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem> Bishan</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
        <Button onClick={() => collapseSidebar()}>
          Button
        </Button>
      </Sidebar>
    </div>
  );
}

export default Navbar;