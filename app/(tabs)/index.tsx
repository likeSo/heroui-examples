import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { Select } from "heroui-native";

const data = Array.from({ length: 50 }, (_, i) => ({
  value: i.toString(),
  label: `Option ${i}`,
}));

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Select presentation="bottom-sheet">
        <Select.Trigger className="w-[300px]">
          <Select.Value placeholder="Choose an option" />
          <Select.TriggerIndicator />
        </Select.Trigger>
        <Select.Portal>
          <Select.Overlay />
          <Select.Content presentation="bottom-sheet">
            {data.map((item) => (
              <Select.Item
                key={item.value}
                value={item.value}
                label={item.label}
              />
            ))}
          </Select.Content>
        </Select.Portal>
      </Select>
    </View>
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
