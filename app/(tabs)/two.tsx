import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { Menu, Typography } from "heroui-native";

export default function TabTwoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Menu>
              <Menu.Trigger>
                <Typography.Heading type="h5">选项</Typography.Heading>
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Overlay className="bg-black/50" />
                <Menu.Content presentation="popover" width={300}>
                  <Menu.Group selectedKeys={["opt1"]}>
                    <Menu.Item id="opt1" className="flex-col">
                      <Menu.ItemIndicator variant="checkmark" />
                      <Menu.ItemTitle>选项1</Menu.ItemTitle>
                      <Menu.ItemDescription>
                        这是一个选项1的描述
                      </Menu.ItemDescription>
                    </Menu.Item>
                    <Menu.Item id="opt2">
                      <Menu.ItemIndicator />
                      <Menu.ItemTitle>选项2</Menu.ItemTitle>
                      <Menu.ItemDescription>
                        这是一个选项2的描述
                      </Menu.ItemDescription>
                    </Menu.Item>
                    <Menu.Item id="opt3">
                      <Menu.ItemIndicator />
                      <Menu.ItemTitle>选项3</Menu.ItemTitle>
                      <Menu.ItemDescription>
                        这是一个选项3的描述
                      </Menu.ItemDescription>
                    </Menu.Item>
                  </Menu.Group>
                </Menu.Content>
              </Menu.Portal>
            </Menu>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="app/(tabs)/two.tsx" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
