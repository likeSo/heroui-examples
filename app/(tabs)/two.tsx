import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { Select } from "heroui-native";

export default function TabTwoScreen() {
  return (
    <>
      <Stack.Screen options={{}} />
      <View style={styles.container}>
        <Select presentation="bottom-sheet">
          <Select.Trigger className="w-60">
            <Select.Value placeholder="Select an option" />
            <Select.TriggerIndicator />
          </Select.Trigger>
          <Select.Portal>
            <Select.Overlay className="bg-black/20" />
            <Select.Content
              presentation="bottom-sheet"
              snapPoints={["60%", "80%"]}
              enableDynamicSizing={false}
              contentContainerClassName="h-full p-0"
            >
              <BottomSheetScrollView>
                <Select.Item value="apple" label="Apple" />
                <Select.Item value="orange" label="Orange" />
                <Select.Item value="banana" label="Banana" />
                <Select.Item value="watermelon" label="Watermelon" />
                <Select.Item value="peach" label="Peach" />
                <Select.Item value="peach" label="Peach" />
              </BottomSheetScrollView>
            </Select.Content>
          </Select.Portal>
        </Select>
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
