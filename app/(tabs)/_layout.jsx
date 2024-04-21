import React from "react";
import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="icon"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const iconsItems = [
    {
      icon: icons.home,
      name: "Home",
      routeName: "home",
    },
    {
      icon: icons.bookmark,
      name: "Bookmark",
      routeName: "bookmark",
    },
    {
      icon: icons.plus,
      name: "Create",
      routeName: "create",
    },
    {
      icon: icons.profile,
      name: "Profile",
      routeName: "profile",
    },
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {iconsItems.map((item, i) => {
          return (
            <Tabs.Screen
              key={i}
              name={item.routeName}
              options={{
                title: item.name,
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    name={item.name}
                    icon={item.icon}
                    color={color}
                    focused={focused}
                  />
                ),
              }}
            />
          );
        })}
      </Tabs>
    </>
  );
};

export default TabsLayout;
