import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router';
import { headerTabs } from '@entities/';

export const TabsNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Tabs
      index={headerTabs.findIndex((t) => t.route === location.pathname)}
      onChange={(index) => navigate(headerTabs[index].route)}
      variant='soft-rounded'
      colorScheme='green'
    >
      <TabList>
        {headerTabs.map((item) => (
          <Tab key={item.route}>{item.label}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
};
